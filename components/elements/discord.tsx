import type { DiscordMessageOptions } from "@skyra/discord-components-react";

declare global {
  // eslint-disable-next-line no-var
  var $discordMessage: DiscordMessageOptions | undefined;
}
