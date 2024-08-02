import { useMantineTheme } from "@mantine/core";
import DarkDanBotHostLogo from "@public/dbh.svg";
import LightDanBotHostLogo from "@public/dbh.svg";

export const Logo = (): any => {
  const theme = useMantineTheme();

  return theme.colorScheme === "dark"
    ? LightDanBotHostLogo
    : DarkDanBotHostLogo;
};
