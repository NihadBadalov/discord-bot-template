import type { Message, PermissionsBitField, Snowflake } from "discord.js";

export interface BaseMessageCommand {
  name: string;
  description?: string;

  cooldown?: number;
  permissionWhitelist?: typeof PermissionsBitField.Flags;
  userIdWhitelist?: Snowflake;

  execute(
    message: Message<boolean>
  ): Promise<any>;
}
