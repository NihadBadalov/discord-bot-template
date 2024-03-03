import type {
  CacheType,
  ChatInputCommandInteraction,
  Client,
  PermissionsBitField,
  Snowflake
} from "discord.js";

export interface BaseSlashCommand {
  name: string;
  description?: string;

  cooldown?: number;
  permissionWhitelist?: typeof PermissionsBitField.Flags;
  userIdWhitelist?: Snowflake;

  execute(
    interaction: ChatInputCommandInteraction<CacheType>,
    client: Client<boolean>,
  ): Promise<any>;
}
