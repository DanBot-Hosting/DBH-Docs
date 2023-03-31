import { FunctionComponent, PropsWithChildren } from "react";
// import NextImage, { StaticImageData } from "next/image";
import {
  Center,
  Image as MantineImage,
  ImageProps,
  Tooltip,
} from "@mantine/core";

// JSDoc comment
/**
 * Next.js image component with additional styling (radius & width/height: 100%)
 * @param {StaticImageData} props.src - Image source provided from an import
 * @param {string} props.alt - Required alt text for accessibility
 * @returns {JSX.Element} - Next.js image component
 * @see {@link https://nextjs.org/docs/api-reference/next/image Next.js Image Component}
 * @example
 * <Image src={accountCreation} alt="How to create an account" />
 **/
export const Image: FunctionComponent<
  PropsWithChildren<ImageProps & { withoutTooltip?: boolean }>
> = ({ alt, withoutTooltip, ...props }) => (
  <Tooltip label={alt} position="bottom" display={withoutTooltip && "none"}>
    <Center>
      <MantineImage
        radius="sm"
        fit="fill"
        width="auto"
        styles={{
          image: {
            maxHeight: 320,
          },
        }}
        {...props}
      />
    </Center>
  </Tooltip>
);
