import { useDisclosure } from "@mantine/hooks";
import { useStyles } from "./styles";

import { FunctionComponent, ReactElement, useState } from "react";

import {
  Container,
  Group,
  Burger,
  Title,
  Drawer,
  UnstyledButton,
  Flex,
  Stack,
  useMantineColorScheme,
  ActionIcon,
} from "@mantine/core";

import { navLinks } from "../../config";
import { useRouter } from "next/router";
import { Moon, Sun } from "@carbon/icons-react";
import { Links } from "@component/links";
import { Search } from "@component/search";

/**
 * Header component that is used in the AppShell if mobile version (see: components/layout/component.tsx)
 * @returns {ReactElement} Responsible div element with given options.
 * @see {@link https://nextjs.org/docs/advanced-features/custom-app Next.js Custom App}
 * @see {@link https://nextjs.org/docs/api-reference/next/router Next.js Router}
 * @see {@link https://mantine.dev/core/getting-started/ Mantine Core}
 * @see {@link https://mantine.dev/core/app-shell/ AppShell}
 * @example
 * <Header />
 **/
export const Header: FunctionComponent = (): ReactElement => {
  const { classes, theme, cx } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const [opened, { toggle, close }] = useDisclosure(false);

  const links = navLinks.map((item) => (
    <Links {...item} key={item.label} onSwitch={close} />
  ));

  return (
    <div className={classes.header}>
      <Container className={classes.mainSection}>
        <Group position="apart">
          <Search w="auto" />

          <Burger
            opened={opened}
            color={dark ? theme.colors.gray[5] : theme.black}
            onClick={toggle}
            size="sm"
          />
        </Group>
        <Drawer
          opened={opened}
          classNames={{
            body: classes.drawerBody,
          }}
          onClose={toggle}
          transitionProps={{
            transition: "slide-right",
          }}
          position="left"
          // A title shifts close icon to the right side of the drawer
          title={
            <ActionIcon
              variant="light"
              color={!dark ? "astronomist-blue" : "astronomist-purple"}
              onClick={() => {
                toggleColorScheme();
                close();
              }}
              title="Toggle color scheme"
              mr="md"
              size={30}
            >
              {!dark ? <Sun /> : <Moon />}
            </ActionIcon>
          }
          padding="md"
        >
          {links}
        </Drawer>
      </Container>
    </div>
  );
};
