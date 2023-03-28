import { Navbar as MantineNavbar, Text, ScrollArea } from '@mantine/core';
import { LinksGroup } from '../navbarLinks/component';
import { navLinks } from './config';
import { useStyles } from './styles';
import Image from 'next/image';
import DanbotSpace from "@public/danbot-space.svg";
// import { IconSun, IconMoonStars } from '@tabler/icons';

export const Navbar = () => {
  const { classes } = useStyles();
  // const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const links = navLinks.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <MantineNavbar height={800} width={{ sm: 300 }} className={classes.navbar}>
      <MantineNavbar.Section className={classes.header}>
        {/* There should be spotlight (search input) instead */}
        <Image src={DanbotSpace} alt="Danbot Space" width={45} />
        <Text className={classes.title}>
          Danbot Space
        </Text>
      </MantineNavbar.Section>

      <MantineNavbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </MantineNavbar.Section>
    </MantineNavbar>
  );
}