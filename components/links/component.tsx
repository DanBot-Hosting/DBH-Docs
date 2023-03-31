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
import { useRouter } from "next/router";

export const Links: FunctionComponent<Link> = ({
  icon: Icon,
  label,
  initiallyOpened,
  links,
  link,
  onSwitch,
}: Link): ReactElement => {
  const { classes, theme, cx } = useStyles();
  const router = useRouter();
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(
    initiallyOpened ||
      (hasLinks ? links : []).some((item) => router.pathname === item.link)
  );
  const ChevronIcon = theme.dir === "ltr" ? ChevronRight : ChevronLeft;
  const items = (hasLinks ? links : []).map((link) =>
    link.title ? (
      <Text className={classes.title} key={link.label}>
        {link.label}
      </Text>
    ) : (
      <Text
        className={cx(classes.link, {
          [classes.active]: router.pathname === link.link,
        })}
        component={link.link && Link}
        href={link.link}
        key={link.label}
        onClick={onSwitch}
      >
        {link.label}
      </Text>
    )
  );

  return (
    <>
      <UnstyledButton
        onClick={() => {
          setOpened((o) => !o);
          if (!hasLinks && onSwitch) onSwitch();
        }}
        className={cx(classes.control, {
          [classes.active]: router.pathname === link,
        })}
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
};
