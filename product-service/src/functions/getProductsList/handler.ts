import 'source-map-support/register';

import type { APIGatewayProxyHandler } from 'aws-lambda';
import { formatJSONResponse } from '@libs/apiGateway';
import productService from '@services/productService';

export const getProductsList: APIGatewayProxyHandler = async () => {
  try {
    const products = await productService.getAll();

    return formatJSONResponse(products);
  } catch (e) {
    console.error(e.message);

    return formatJSONResponse(
      {
        message: `Something went wrong during search...`
      },
      500
    );
  }
};
