import type { BaseEvent } from '@src/types/BaseEvent';
import logger from '@src/logger';

export default {
  name: 'error',
  execution: 'on',
  execute(info) {
    logger.error(info);
  },
} as BaseEvent<'error'>;
