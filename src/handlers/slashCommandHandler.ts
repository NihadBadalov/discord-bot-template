import type { CacheType, ChatInputCommandInteraction, Client } from "discord.js";
import logger from "@src/logger";
import { defaultCooldown } from '@configs/config.json';

export default async function handle(
  client: Client<boolean>,
  interaction: ChatInputCommandInteraction<CacheType>
) {
  const slashCommand = client.slash_commands.get(interaction?.commandName);

  if (!slashCommand)
    return await interaction.reply('Could not find the slash command!');

  // Handle cooldowns
  if (client.cooldowns.get('slash_' + interaction.commandName)?.has(interaction.user.id)) {
    const date = client.cooldowns.get('slash_' + slashCommand.name)?.get(interaction.user.id)
    const cooldown = slashCommand?.cooldown
      ?? defaultCooldown;

    if (date && Date.now() < date + cooldown * 1_000)
      return await interaction.reply({
        content: `Please wait **${Math.round((date + cooldown - Date.now()) / 1_000)}** more second(s) before reusing the \`${slashCommand.name}\` command.`,
        ephemeral: true
      });
    else client.cooldowns.get('slash_' + slashCommand.name)?.delete(interaction.user.id);
  }

  logger.info(`\`${interaction.user.tag}\` ran command \`${slashCommand.name}`);

  slashCommand.execute(interaction, client).then(() => {
    // Set the cooldown
    client.cooldowns.get('slash_' + slashCommand.name)!.set(
      interaction.user.id,
      Date.now(),
    );
  });
}
