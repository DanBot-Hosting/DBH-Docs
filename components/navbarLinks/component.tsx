import { FunctionComponent, ReactElement, useState } from "react";
import {
  Group,
  Box,
  Collapse,
  ThemeIcon,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { ChevronLeft, ChevronRight } from "@carbon/icons-react";
import { useStyles } from "./styles";
import Link from "next/link";

export const LinksGroup: FunctionComponent = ({
  icon: Icon,
  label,
  initiallyOpened,
  links,
  link,
}: Link): ReactElement => {
  const { classes, theme } = useStyles();
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const ChevronIcon = theme.dir === "ltr" ? ChevronRight : ChevronLeft;
  const items = (hasLinks ? links : []).map((link) =>
    link.title ? (
      <Text className={classes.title} key={link.label}>
        {link.label}
      </Text>
    ) : (
      <Text
        className={classes.link}
        component={link.link && Link}
        href={link.link}
        key={link.label}
      >
        {link.label}
      </Text>
    )
  );

  return (
    <>
      <UnstyledButton
        onClick={() => setOpened((o) => !o)}
        className={classes.control}
        component={!hasLinks && Link}
        href={!hasLinks ? link : undefined}
      >
        <Group position="apart" spacing={0}>
          <Box
            sx={{ display: "flex", alignItems: "center" }}
            className={classes.dropdown}
          >
            <ThemeIcon variant="default" size={30}>
              <Icon size={16} />
            </ThemeIcon>
            <Box ml="md">{label}</Box>
          </Box>
          {hasLinks && (
            <ChevronIcon
              className={classes.chevron}
              size={16}
              style={{
                transform: opened
                  ? `rotate(${theme.dir === "rtl" ? -90 : 90}deg)`
                  : "none",
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}
