import type { Awaitable, ClientEvents } from "discord.js";

export interface BaseEvent<
  Event extends keyof ClientEvents,
>{
  name: Event;
  description?: string;
  execution: 'on' | 'once';

  execute(...args: ClientEvents[Event]): Awaitable<any>;
}
