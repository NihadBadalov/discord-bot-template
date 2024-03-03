import type { BaseEvent } from "@src/types/BaseEvent";
import handle from "@src/handlers/slashCommandHandler";

export default {
  name: 'interactionCreate',
  execution: 'on',
  execute(interaction) {
    if (!interaction.isChatInputCommand()) return;
    handle(interaction.client, interaction);
  },
} as BaseEvent<'interactionCreate'>;
