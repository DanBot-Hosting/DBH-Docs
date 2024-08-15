import { createStyles } from "@mantine/emotion";

export const useStyles = createStyles((theme) => ({
  control: {
    fontWeight: 500,
    fontFamily: theme.headings.fontFamily,
    display: "block",
    width: "100%",
    paddingTop: theme.spacing.xs,
    paddingBottom: theme.spacing.xs,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    fontSize: theme.fontSizes.sm,
    // textShadow: (theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black) + " 0 0 2px",

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[1],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
      textShadow:
        theme.fn.rgba(
          theme.colorScheme === "dark" ? theme.white : theme.black,
          0.3,
        ) + " 0 0 5px",
    },
  },

  active: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[1],
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    textShadow:
      theme.fn.rgba(
        theme.colorScheme === "dark" ? theme.white : theme.black,
        0.3,
      ) + " 0 0 5px",
  },

  dropdown: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    textDecoration: "none",
    userSelect: "none",
  },

  link: {
    fontWeight: 500,
    fontFamily: theme.headings.fontFamily,
    display: "block",
    textDecoration: "none",
    padding: theme.spacing.xs,
    paddingRight: theme.spacing.md,
    paddingLeft: 31,
    marginLeft: 30,
    fontSize: theme.fontSizes.sm,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    borderLeft: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[1],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
      textShadow:
        theme.fn.rgba(
          theme.colorScheme === "dark" ? theme.white : theme.black,
          0.3,
        ) + " 0 0 5px",
    },
  },

  title: {
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,
    fontFamily: theme.headings.fontFamily,

    marginTop: theme.spacing.sm,
    marginLeft: 30,

    paddingLeft: 31,
    paddingTop: `calc(${theme.spacing.xs} * .3)`,
    paddingBottom: `calc(${theme.spacing.xs} * .3)`,

    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    borderLeft: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  chevron: {
    transition: "transform 200ms ease",
  },
}));
