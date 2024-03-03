import type { Collection } from "discord.js";
import type { BaseSlashCommand } from "./BaseSlashCommand";

declare module 'process' {
  interface Env {
    PUBLIC_KEY: string;
    TOKEN: string;
    CLIENT_SECRET: string;
  }
}

declare module 'discord.js' {
  interface Client {
    slash_commands: Collection<string, BaseSlashCommand>;
    message_commands: Collection<string, BaseMessageCommand>;
    cooldowns: Collection<string, Collection<Snowflake, number>>;
  }
}
