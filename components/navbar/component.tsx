import { Navbar as MantineNavbar, ScrollArea } from "@mantine/core";
import { Links } from "@component/links";
import { navLinks } from "../../config";
import { useStyles } from "./styles";
import { Search } from "@component/search";
// import { IconSun, IconMoonStars } from '@tabler/icons';

export const Navbar = () => {
  const { classes } = useStyles();
  // const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const links = navLinks.map((item) => <Links {...item} key={item.label} />);

  return (
    <MantineNavbar height={800} width={{ sm: 300 }} className={classes.navbar}>
      <MantineNavbar.Section className={classes.header}>
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
