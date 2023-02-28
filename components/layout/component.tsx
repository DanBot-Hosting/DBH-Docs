import {
  AppShell,
  Box,
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { useMediaQuery } from "@mantine/hooks";
import { FunctionComponent, PropsWithChildren, useState } from "react";
import { setCookie } from "cookies-next";
import { Hanken_Grotesk, Space_Grotesk, Space_Mono } from "@next/font/google";
import { Header } from "@component/header";
import { Navbar } from "@component/navbar";
import { RouterTransition } from "@component/progress";
import { Footer } from "@component/footer";
import Noise from "@public/noise.svg";

import { colors, components, focusRingStyles } from "./config";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap"
});
const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap"
});
const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap"
});

/**
 * Layout component that is used as a provider (see: pages/_app.tsx)
 * @returns {ReactElement} Several providers wrapping the children property.
 * @param {PropsWithChildren<{ colorScheme: ColorScheme }>} props The props of the component.
 * @param {PropsWithChildren<{ colorScheme: ColorScheme }>} props.children The children of the component.
 * @param {ColorScheme} props.colorScheme The color scheme of the component provided in _app.tsx as a cookie.
 * @see {@link https://nextjs.org/docs/advanced-features/custom-app Next.js Custom App}
 * @see {@link https://mantine.dev/core/getting-started/ Mantine Core}
 * @see {@link https://mantine.dev/core/app-shell/ AppShell}
 * @example
 * <PanelProvider colorScheme="dark" />
 **/
export const PanelProvider: FunctionComponent<
  PropsWithChildren<{ colorScheme: ColorScheme }>
> = ({ children, ...props }) => {
  const mobile = useMediaQuery("(max-width: 900px)");
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    props.colorScheme
  );

  // Toggle color scheme function called in Navbar & Header
  const toggleColorScheme = (value?: ColorScheme): void => {
    const nextColorScheme =
      value || (colorScheme === "dark" ? "light" : "dark");
    setColorScheme(nextColorScheme);
    // When color scheme is updated save it to cookie
    setCookie("color-scheme", nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
      sameSite: true,
    });
  };

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        withCSSVariables
        theme={{
          colorScheme,
          fontFamily: hankenGrotesk.style.fontFamily,
          fontFamilyMonospace: spaceMono.style.fontFamily,
          loader: "dots",
          primaryColor: "astronomist-blue",
          primaryShade: 9,
          defaultRadius: 0,
          components: components,
          colors: colors,
          focusRingStyles: focusRingStyles,
          headings: {
            fontFamily: spaceGrotesk.style.fontFamily
          },
          globalStyles: (theme) => ({
            "::selection": {
              backgroundColor: theme.colorScheme === "dark" ? theme.white : theme.colors.dark[9],
              color: theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.white
            },
            ".noise": {
              backgroundImage: `url(${Noise.src})`,
              backgroundRepeat: "repeat",
              mixBlendMode: theme.colorScheme === "dark" ? "darken" : "screen",
              position: "fixed",
              pointerEvents: "none",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              zIndex: 10
            },
            "img": {
              // Ignore noise
              position: "relative",
              zIndex: 20
            }
          })
        }}
      >
        <RouterTransition />
        <NotificationsProvider>
          <AppShell
            header={mobile && <Header />}
            navbar={!mobile && <Navbar />}
            footer={<Footer />}
          >
            <Box className="noise" />
            {children}
          </AppShell>
        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
