import { FunctionComponent, PropsWithChildren, ReactNode } from "react";
import { Box, Card, createStyles, Text } from "@mantine/core";
import { InformationFilled } from "@carbon/icons-react";

export interface TipProps {
  label?: string;
  icon?: import("@carbon/icons-react").CarbonIconType;
}

/**
 * Next.js image component with additional styling (radius & width/height: 100%)
 * @param {StaticImageData} props.src - Image source provided from an import
 * @param {string} props.alt - Required alt text for accessibility
 * @returns {JSX.Element} - Next.js image component
 * @see {@link https://nextjs.org/docs/api-reference/next/image Next.js Image Component}
 * @example
 * <Image src={accountCreation} alt="How to create an account" />
 **/
export const Tip: FunctionComponent<PropsWithChildren<TipProps>> = ({
  children,
  label = "Note",
  icon: Icon = InformationFilled,
  ...props
}) => {
  const { classes } = createStyles((theme, _, u) => ({
    tip: {
      display: "flex",
      gap: theme.spacing.sm,
    },

    icon: {
      minWidth: 32,
      minHeight: 32,
    },

    text: {
      display: "inline-flex",
      alignItems: "center",
    },

    content: {
      "& p": {
        margin: 0,
        display: "inline",
      },
    },
  }))();

  return (
    <Card className={classes.tip} my="md" {...props}>
      <Icon title={label} className={classes.icon} />
      <Box className={classes.text}>
        <div>
          <Text fw={700} span>
            {label}:
          </Text>{" "}
          <Text className={classes.content} span>
            {children}
          </Text>
        </div>
      </Box>
    </Card>
  );
};
