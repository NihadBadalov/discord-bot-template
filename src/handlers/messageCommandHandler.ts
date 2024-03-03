import type { Message } from "discord.js";
import logger from "@src/logger";
import type { BaseMessageCommand } from "@src/types/BaseMessageCommand";

export default async function handle(
  message: Message<boolean>,
) {
  const messageCommand: BaseMessageCommand | undefined = message.client.message_commands.get(
    message.content.slice(1,
      message.content.indexOf(' ') === -1
        ? message.content.length
        : message.content.indexOf(' ')
    )
  );

  if (!messageCommand) return;

  logger.info(`\`${message.author.tag}\` ran command \`${messageCommand.name}\``);

  messageCommand
    .execute(message);
}
