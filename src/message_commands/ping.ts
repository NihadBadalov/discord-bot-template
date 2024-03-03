import type { BaseMessageCommand } from "@src/types/BaseMessageCommand";

export default {
  name: 'ping',
  description: 'Check bot latency',
  async execute(message) {
    await message.reply(`Pong! Latency: ${Date.now() - message.createdTimestamp}ms`);
  },
} as BaseMessageCommand;
