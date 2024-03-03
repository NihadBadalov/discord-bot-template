import { REST, Routes } from 'discord.js';
import { clientId } from '@configs/config.json';
import { readdirSync } from 'fs';
import type { BaseMessageCommand } from '@src/types/BaseMessageCommand';

// Command information
let commands: Record<'name'|'description', string | null>[] = [];

readdirSync('./src/slash_commands').forEach(async file => {
  const { default: command } = await import(`@src/slash_commands/${file}`) as {
    default: BaseMessageCommand,
  };

  commands.push({
    name: command.name.slice(0, -3),
    description: command.description || null,
  });
});

// Command pushing
const rest = new REST({ version: '10' }).setToken(process.env.TOKEN!);

try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands(clientId), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}
