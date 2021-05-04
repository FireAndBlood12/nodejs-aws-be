import middy from '@middy/core';
import cors from '@middy/http-cors';
import middyJsonBodyParser from '@middy/http-json-body-parser';
import inputOutputLogger from '@middy/input-output-logger';
import httpErrorHandler from '@middy/http-error-handler';
import { logger } from '@utils/logger';

export const middyfy = (handler) => {
  return middy(handler)
    .use(middyJsonBodyParser())
    .use(cors())
    .use(inputOutputLogger({ logger: logger.info.bind(logger) }))
    .use(
      httpErrorHandler({
        logger: logger.error.bind(logger),
        fallbackMessage: 'Error during execution'
      })
    )
};
