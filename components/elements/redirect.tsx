import { FunctionComponent, PropsWithChildren, ReactNode } from "react";
import { Box, Card, createStyles, Text, Tooltip } from "@mantine/core";
import { PageLast } from "@carbon/icons-react";
import { navLinks } from "config";
import { useRouter } from "next/router";

export interface RedirectProps {
  href?: string;
  label?: string;
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
export const Redirect: FunctionComponent<RedirectProps> = ({
  href,
  label,
  ...props
}) => {
  const { classes } = createStyles((theme) => ({
    redirect: {
      display: "flex",
      gap: theme.spacing.sm,
      cursor: "pointer",

      ":hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[5]
            : theme.colors.gray[1],
      },
    },

    icon: {
      minWidth: 32,
      minHeight: 32,
    },

    text: {
      display: "inline-flex",
      alignItems: "center",
      userSelect: "none",
    },
  }))();
  const router = useRouter();

  const pages = navLinks
    .map((link: Link) =>
      link.link && !link.links ? link : [link, ...link.links],
    )
    .flat();

  const page = pages.find(({ link }) => link === href);

  const Icon = (page && page["icon"]) ?? PageLast;
  label = label ? label : page ? page.label : href;

  return (
    <Tooltip label={href} withArrow position="top-start">
      <Card
        my="md"
        className={classes.redirect}
        onClick={() => router.push(href)}
        {...props}
      >
        <Icon title={label} className={classes.icon} />
        <Box className={classes.text}>
          <div>
            <Text fw={700} span>
              {label}
            </Text>
          </div>
        </Box>
      </Card>
    </Tooltip>
  );
};
