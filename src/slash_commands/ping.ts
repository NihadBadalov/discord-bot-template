import type { BaseSlashCommand } from "@src/types/BaseSlashCommand";
import type { ChatInputCommandInteraction, CacheType } from "discord.js";

export default {
  name: 'ping',
  description: 'Just a test command',
  async execute(
    interaction: ChatInputCommandInteraction<CacheType>,
  ): Promise<any> {
    await interaction.reply('hello');
  },
} as BaseSlashCommand;
