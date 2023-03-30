import { FunctionComponent, PropsWithChildren } from "react";
import NextImage, { StaticImageData } from "next/image";

export interface ImageProps {
  src: StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  margin?: number;
}

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
export const Image: FunctionComponent<PropsWithChildren<ImageProps>> = ({
  src,
  alt,
  width = "100%",
  height = "auto",
  margin = 32,
  ...props
}) => (
  <NextImage
    src={src}
    alt={alt}
    style={{
      width: width,
      height: height,
      maxHeight: 320,
      marginTop: margin,
      marginBottom: margin,
      borderRadius: 4,
    }}
    {...props}
  />
)