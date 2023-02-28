import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  control: {
    fontWeight: 500,
    fontFamily: theme.headings.fontFamily,
    display: 'block',
    width: '100%',
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    fontSize: theme.fontSizes.sm,
    // textShadow: (theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black) + " 0 0 2px",

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      textShadow: theme.fn.rgba(theme.colorScheme === 'dark' ? theme.white : theme.black, 0.3) + " 0 0 5px"
    },
  },

  link: {
    fontWeight: 500,
    fontFamily: theme.headings.fontFamily,
    display: 'block',
    textDecoration: 'none',
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    paddingLeft: 31,
    marginLeft: 30,
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    borderLeft: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      textShadow: theme.fn.rgba(theme.colorScheme === 'dark' ? theme.white : theme.black, 0.3) + " 0 0 5px"
    },
  },

  icon: {
    transform: "skew(-10deg)",

    boxShadow: theme.fn.variant({
      color: theme.primaryColor,
      variant: "light"
    }).background + " 0 0 15px"
  },

  chevron: {
    transition: 'transform 200ms ease',
  },
}));