import { createStyles } from "@mantine/core";

// Styles for the Footer component
// Used mantine's createStyles function
// see: https://emotion.sh/docs/introduction
export const useStyles = createStyles((theme) => ({
  footer: {
    [theme.fn.smallerThan(900)]: {
      paddingLeft: 0,
    },
    paddingLeft: 300,
  },

  wrapper: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[3]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  info: {
    fontFamily: theme.headings.fontFamily,
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));
