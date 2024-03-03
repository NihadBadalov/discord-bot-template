import type { BaseEvent } from "@src/types/BaseEvent";
import { prefix } from '@configs/config.json';
import handle from "@src/handlers/messageCommandHandler";

export default {
  name: 'messageCreate',
  execution: 'on',
  async execute(message) {
    if (!message.content.startsWith(prefix)) return;
    handle(message);
  },
} as BaseEvent<'messageCreate'>;
