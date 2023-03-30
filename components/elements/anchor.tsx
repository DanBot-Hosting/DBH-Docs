import { FunctionComponent, PropsWithChildren } from "react";
import { Text, Tooltip } from "@mantine/core";
import { InformationFilled } from "@carbon/icons-react";

export interface AnchorProps {
  href?: string;
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
export const Anchor: FunctionComponent<PropsWithChildren<AnchorProps>> = ({
  children,
  href = "/",
  ...props
}) => {
  return (
    <Tooltip label={href} withArrow>
      <Text component="a" href={href} span target="_blank" {...props}>
        {children}
      </Text>
    </Tooltip>
  );
};
