import type { BaseEvent } from '@src/types/BaseEvent';
import logger from '@src/logger';

export default {
  name: 'warn',
  execution: 'on',
  execute(info) {
    logger.warn(info);
  },
} as BaseEvent<'warn'>;
