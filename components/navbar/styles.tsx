import { createStyles } from '@mantine/core';

// Styles for the Navbar component
// Used mantine's createStyles function
// see: https://emotion.sh/docs/introduction
export const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    height: "100%"
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },

  colorScheme: {
    transform: "skew(-10deg)",
    boxShadow: theme.fn.variant({
      color: theme.colorScheme === "dark" ? 'astronomist-purple' : "astronomist-blue",
      variant: "light"
    }).background + " 0 0 15px",

    "&:active": {
      transform: "skew(-10deg)",
      boxShadow: theme.fn.variant({
        color: theme.colorScheme === "dark" ? 'astronomist-purple' : "astronomist-blue",
        variant: "light"
      }).background + " 0 0 10px",
      transition: "box-shadow 100ms"
    }
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl
  },
}));