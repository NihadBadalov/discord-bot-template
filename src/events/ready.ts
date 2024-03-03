import type { BaseEvent } from '@src/types/BaseEvent';
import logger from '@src/logger';
import { Client, Collection } from 'discord.js';
import { readdirSync } from 'fs';

export default {
  name: 'ready',
  execution: 'once',
  execute(client: Client) {
    logger.info(`The bot is online as ${client?.user!?.tag}!`);

    client.slash_commands = new Collection();
    client.message_commands = new Collection();
    client.cooldowns = new Collection();

    // Load slash commands
    readdirSync('./src/slash_commands').forEach(async file => {
      const { default: command } = await import(`@src/slash_commands/${file}`);

      const commandName = file.slice(0, -3);
      client.slash_commands.set(commandName, command);
      client.cooldowns.set(commandName, new Collection());
    });

    // Load message commands
    readdirSync('./src/message_commands').forEach(async file => {
      const { default: command } = await import(`@src/message_commands/${file}`);

      const commandName = file.slice(0, -3);
      client.message_commands.set(commandName, command);
      client.cooldowns.set(commandName, new Collection());
    });
  },
} as BaseEvent<"ready">;
