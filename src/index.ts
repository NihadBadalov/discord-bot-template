import { Client, GatewayIntentBits } from 'discord.js';
import type { BaseEvent } from '@src/types/BaseEvent';
import { readdirSync } from 'fs';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

readdirSync('./src/events').forEach(async file => {
  const { default: command } = await import(`@src/events/${file}`) as {
    default: BaseEvent<any>,
  };
  client[command.execution](command.name, command.execute);
});

client.login(process.env.TOKEN!);
