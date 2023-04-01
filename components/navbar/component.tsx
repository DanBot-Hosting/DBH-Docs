import {
  ActionIcon,
  Navbar as MantineNavbar,
  ScrollArea,
  useMantineColorScheme,
} from "@mantine/core";
import { Links } from "@component/links";
import { navLinks } from "../../config";
import { useStyles } from "./styles";
import { Search } from "@component/search";
import { Moon, Sun } from "@carbon/icons-react";

export const Navbar = () => {
  const { classes } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const links = navLinks.map((item) => <Links {...item} key={item.label} />);

  return (
    <MantineNavbar height={800} width={{ sm: 300 }} className={classes.navbar}>
      <MantineNavbar.Section className={classes.header}>
        <ActionIcon
          variant="light"
          color={
            colorScheme === "dark" ? "astronomist-purple" : "astronomist-blue"
          }
          onClick={() => toggleColorScheme()}
          title="Toggle color scheme"
          size={36}
        >
          {colorScheme === "dark" ? <Moon /> : <Sun />}
        </ActionIcon>
        <Search w="100%" />
      </MantineNavbar.Section>

      <MantineNavbar.Section
        grow
        className={classes.links}
        component={ScrollArea}
      >
        <div className={classes.linksInner}>{links}</div>
      </MantineNavbar.Section>
    </MantineNavbar>
  );
};
