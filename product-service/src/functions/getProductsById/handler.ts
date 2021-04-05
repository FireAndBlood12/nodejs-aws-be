import 'source-map-support/register';

import type { APIGatewayProxyHandler } from 'aws-lambda';
import { formatJSONResponse } from '@libs/apiGateway';
import ProductService from '@services/productService';

export const getProductsById: APIGatewayProxyHandler = async (event) => {
  const id = event.pathParameters?.id;

  if (!id) {
    return formatJSONResponse({
      message: 'Error: Mandatory path parameter is missed'
    }, 404);
  }

  try {
    const product = await ProductService.getById(id);

    if (!product) {
      return formatJSONResponse({
        message: `Can't find product with id: ${id}`
      }, 404);
    }
  
    return formatJSONResponse(product);
  } catch(e) {
    console.error(e.message);

    return formatJSONResponse({
      message: `Something went wrong during search...`
    }, 500);
  }
}
