import { useStyles } from "./styles";
import Image from "next/image";

import type { FunctionComponent, ReactElement } from "react";

import { Box, Container, Group, SimpleGrid, Title, Text } from "@mantine/core";

import { footerLicense, footerLinks } from "./config";
import { Logo } from "@elements";

/**
 * Footer component that is used in the AppShell (see: components/layout/component.tsx)
 * @returns {ReactElement} Responsible div element with given options.
 * @see {@link https://nextjs.org/docs/advanced-features/custom-app Next.js Custom App}
 * @see {@link https://mantine.dev/core/getting-started/ Mantine Core}
 * @see {@link https://mantine.dev/core/app-shell/ AppShell}
 * @example
 * <Footer />
 **/
export const Footer: FunctionComponent = (): ReactElement => {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <div className={classes.wrapper}>
        <Container className={classes.inner}>
          <Image src={Logo()} alt="Danbot Space" height={32} width={32} />
          <Group className={classes.info} ta="center">
            {footerLicense}
          </Group>
        </Container>
      </div>
    </div>
  );
};
