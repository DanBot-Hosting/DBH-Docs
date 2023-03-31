import type { FunctionComponent, ReactElement } from "react";
import { hint } from "./config";
import { Input, InputProps, Kbd, Title } from "@mantine/core";
import { PageLast, Search as CarbonSearch } from "@carbon/icons-react";
import { SpotlightProvider, spotlight, SpotlightAction } from "@mantine/spotlight";
import { navLinks } from "config";
import { useRouter } from "next/router";
import Taken from "@public/illustrations/taken.svg";
import Image from "next/image";

export const Search: FunctionComponent<InputProps> = (props): ReactElement => {
  const router = useRouter();
  const pages = navLinks
    .map((link: Link) =>
      link.link && !link.links ? link : [link, ...link.links]
    )
    .flat();

  const actions: SpotlightAction[] = pages.map((page: Link | Sublink) => ({
    title: page.label,
    description: page.description,
    onTrigger: () => router.push(page.link),
    icon: "icon" in page ? <page.icon /> : <PageLast />
  }));

  return (
    <SpotlightProvider
      actions={actions}
      searchIcon={<CarbonSearch size="16" />}
      searchPlaceholder="Search..."
      shortcut="/"
      nothingFoundMessage={(
        <>
          <Image src={Taken} alt="404" width={150} />
          <Title order={5} mt="md">We found nothing...</Title>
        </>
      )}
    >
      <Input
        icon={<CarbonSearch />}
        rightSection={<Kbd sx={{ userSelect: "none" }}>/</Kbd>}
        placeholder="Search"
        component="button"
        onClick={spotlight.open}
        pointer
        {...props}
      >
        <Input.Placeholder>{hint}</Input.Placeholder>
      </Input>
    </SpotlightProvider>
  );
};
