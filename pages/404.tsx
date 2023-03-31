import type { NextPage } from "next";
import { ReactElement } from "react";
import { createStyles, Title, Text, Container } from "@mantine/core";
import Stars from "@public/illustrations/stars.svg";
import Image from "next/image";

const useStyles = createStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 80,
    paddingBottom: 80,
  },

  title: {
    marginTop: 25,
    fontWeight: 900,
    fontSize: 38,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 32,
    },
  },

  description: {
    maxWidth: 500,
    margin: "auto",
    marginTop: theme.spacing.xl,
    marginBottom: `calc(${theme.spacing.xl}px * 1.5)`,
  },

  stars: {
    [theme.fn.smallerThan("xs")]: {
      width: 200,
      height: "auto",
    },
  },
}));

const NotFound: NextPage = (): ReactElement => {
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <Image src={Stars} alt="404" width={400} className={classes.stars} />
      <Title className={classes.title} ta="center">
        You have found a secret place.
      </Title>
      <Text
        color="dimmed"
        size="lg"
        align="center"
        className={classes.description}
      >
        Unfortunately, this is only a 404 page. You may have mistyped the
        address, or the page has been moved to another URL.
      </Text>
    </Container>
  );
};

export default NotFound;
