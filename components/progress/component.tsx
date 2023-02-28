import { ReactElement, useEffect } from "react";
import { NextRouter, useRouter } from "next/router";
import {
    startNavigationProgress,
    completeNavigationProgress,
    NavigationProgress,
} from "@mantine/nprogress";

/**
 * Progress bar component to show the user that the page is loading.
 * @returns {ReactElement} Mantine's NavigationProgress component with additional Next options.
 * @see {@link https://nextjs.org/docs/advanced-features/custom-app Next.js Custom App}
 * @see {@link https://mantine.dev/core/getting-started/ Mantine Core}
 * @see {@link https://mantine.dev/others/nprogress/ NProgress}
 * @example
 * <RouterTransition />
 **/
export const RouterTransition = (): ReactElement => {
    const router: NextRouter = useRouter();

    useEffect(() => {
        const handleStart = (url: string): void =>
            url !== router.asPath && startNavigationProgress();
        const handleComplete = (): void => completeNavigationProgress();

        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleComplete);
        router.events.on("routeChangeError", handleComplete);

        return () => {
            router.events.off("routeChangeStart", handleStart);
            router.events.off("routeChangeComplete", handleComplete);
            router.events.off("routeChangeError", handleComplete);
        };
    }, [router.asPath, router.events]);

    return (
        <NavigationProgress
            autoReset={true}
            progressLabel="Loading page..."
            color="astronomist-blue.6"
        />
    );
};
