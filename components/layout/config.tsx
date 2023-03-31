import { Copy, Anchor, Image, Redirect, Tip } from "@elements";
import type { Tuple, MantineTheme } from "@mantine/core";
import { shades, tints, tones } from "cvet";

type CustomColor = Tuple<string, 10>;
interface CustomColors {
  [key: string]: CustomColor;
}

export const colors: CustomColors = {
  "astronomist-blue": tints("#7089D9", 10).reverse() as CustomColor,
  "astronomist-purple": tints("#4E3570", 10).reverse() as CustomColor,
  // Half of the dark shades are based off lighter colors, the other half is dark shades
  dark: [...shades("#a5a4a6", 5), ...shades("#212025", 5)] as CustomColor
};

export const components = {
  Card: {
    defaultProps: (theme: MantineTheme) => ({
      withBorder: theme.colorScheme === "light",
    }),
  },
  Anchor: {
    styles: (theme: MantineTheme) => ({
      root: {
        backgroundColor: theme.black,
        color: theme.white,
        paddingLeft: `calc(${theme.spacing.xs} * .5)`,
        paddingRight: `calc(${theme.spacing.xs} * .5)`,
        borderRadius: theme.radius.xs,
        "&:hover": {
          backgroundColor: theme.fn.lighten(
            theme.black,
            .2
          ),
          color: theme.fn.lighten(
            theme.white,
            .3
          ),
          textDecoration: "none",
        }
      },
    }),
  },
  TypographyStylesProvider: {
    styles: (theme: MantineTheme) => ({
      root: {
        "& a": components.Anchor.styles(theme).root,
      }
    }),
  }
}

export const focusRingStyles = {
  resetStyles: () => ({ outline: 'none' }),
  styles: (theme: MantineTheme) => ({ outline: `1px solid ${theme.colors["astronomist-blue"][8]}` }),
}

export const mdxComponents = {
  a: Anchor,
  img: Image,
  Image: Image,
  Redirect: Redirect,
  Tip: Tip,
  Copy: Copy
}