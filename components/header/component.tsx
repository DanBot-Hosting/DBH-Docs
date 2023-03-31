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
  // const router = useRouter();
  // const [active, setActive] = useState(
  //   navLinks.find((link: Link) =>
  //     link.links.some((sub) => sub.link === router.pathname)
  //   ) ?? navLinks[0]
  // );
  // const [activeLink, setActiveLink] = useState(
  //   active.links.find((link) => link.link === router.pathname)
  // );

  // const mainLinks = navLinks.map((link: Link) => (
  //   <UnstyledButton
  //     onClick={() => setActive(link)}
  //     key={link.label}
  //     className={cx(classes.mainLink, {
  //       [classes.mainLinkActive]: link.label === active.label,
  //     })}
  //   >
  //     <link.icon />
  //   </UnstyledButton>
  // ));

  const links = navLinks.map((item) => (
    <Links {...item} key={item.label} onSwitch={toggle} />
  ));

  return (
    <div className={classes.header}>
      <Container className={classes.mainSection}>
        <Group position="apart">
          {/* <Title order={3} className={classes.title} pl="sm">
            test
          </Title> */}
          <Search w="50%" />

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
          // title={(
          //   <Title order={4} className={classes.title}>
          //     {/* <ActionIcon
          //       variant="light"
          //       radius="sm"
          //       color={!dark ? 'astronomist-blue' : 'astronomist-purple'}
          //       onClick={() => toggleColorScheme()}
          //       title="Toggle color scheme"
          //       mr="md"
          //       size={44}
          //     >
          //       {!dark ? <Sun /> : <Moon />}
          //     </ActionIcon> */}
          //     {/* {active.label} */}
          //     test
          //   </Title>
          // )}
          // Shift close icon to right side of the drawer
          title={<></>}
          padding="md"
        >
          {links}
        </Drawer>
      </Container>
    </div>
  );
};
