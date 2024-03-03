import type { BaseEvent } from '@src/types/BaseEvent';
import logger from '@src/logger';

export default {
  name: 'debug',
  execution: 'on',
  execute(info) {
    logger.debug(info);
  },
} as BaseEvent<'debug'>;
