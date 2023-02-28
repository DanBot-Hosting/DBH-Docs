import { Navbar as MantineNavbar, Group, Code, ScrollArea, useMantineColorScheme, ActionIcon } from '@mantine/core';
import { LinksGroup } from '../navbarLinks/component';
import { navLinks } from './config';
import { useStyles } from './styles';
// import Image from 'next/image';
// import DanbotSpace from "@public/danbot-space.svg";
// import { IconSun, IconMoonStars } from '@tabler/icons';

export const Navbar = () => {
  const { classes } = useStyles();
  // const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const links = navLinks.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <MantineNavbar height={800} width={{ sm: 300 }} p="md" className={classes.navbar}>
      {/* <MantineNavbar.Section className={classes.header}>
        <Group position="apart" align="center">
          <Image src={DanbotSpace} alt="Danbot Space" width={35} />
          <ActionIcon
            variant="light"
            color={colorScheme !== "dark" ? 'astronomist-blue' : 'astronomist-purple'}
            className={classes.colorScheme}
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
            mr="md"
            size={30}
          >
            {colorScheme !== "dark" ? <IconSun size={18} /> : <IconMoonStars size={18} />}
          </ActionIcon>
        </Group>
      </MantineNavbar.Section> */}

      <MantineNavbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </MantineNavbar.Section>
    </MantineNavbar>
  );
}