import { useMantineTheme } from "@mantine/core";
import DarkDanbotSpaceLogo from "@public/danbot-space.svg";
import LightDanbotSpaceLogo from "@public/danbot-space-inverse.svg";

export const Logo = (): any => {
  const theme = useMantineTheme();

  return theme.colorScheme === "dark"
    ? LightDanbotSpaceLogo
    : DarkDanbotSpaceLogo;
};
