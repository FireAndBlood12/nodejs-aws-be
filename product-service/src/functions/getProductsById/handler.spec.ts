import type {
  APIGatewayProxyEvent,
  APIGatewayProxyEventQueryStringParameters,
  APIGatewayProxyResult
} from 'aws-lambda';

import productService from '@services/productService';
import { getProductsById } from './handler';
import { mocked } from 'ts-jest/utils';
import { formatJSONResponse } from '@libs/apiGateway';
import IProduct from '@data/interfaces/IProduct';

const product = {
  id: '7567ec4b-b10c-48c5-9345-fc73c48a80a1',
  title: 'HP ENVY x360',
  description: 'HP ENVY x360 13-ay0008ca FHD convertible laptop - AMD Ryzen™ 5',
  price: 1049.99,
  count: 14,
  imgUrl: 'https://store.hp.com/CanadaStore/Html/Merch/Images/c06562022_209x189.jpg',
  ram: 8,
  storage: '256 GB SSD storage',
  display: '33.8 cm (13.3") diagonal FHD display'
};
const event = {
  pathParameters: {
    id: '7567ec4b-b10c-48c5-9345-fc73c48a80a1'
  } as APIGatewayProxyEventQueryStringParameters
} as APIGatewayProxyEvent;
const eventWithoutId = {
  pathParameters: {
    test: ''
  } as APIGatewayProxyEventQueryStringParameters
} as APIGatewayProxyEvent;

jest.mock('@services/productService');

describe('getProductsById', () => {
  it('should call productService to get product', async () => {
    mocked(productService.getById).mockResolvedValue(product as IProduct);

    await getProductsById(event, null, null);

    expect(productService.getById).toBeCalledWith(product.id);
  });

  it('should return respose with product from productService', async () => {
    mocked(productService.getById).mockResolvedValue(product as IProduct);

    const result = await getProductsById(event, null, null);

    expect(result).toEqual(formatJSONResponse(product));
  });

  it('should return error mesage when there is no product with such id', async () => {
    mocked(productService.getById).mockResolvedValue(null);

    const result = await getProductsById(event, null, null);

    expect(result).toEqual(
      formatJSONResponse(
        {
          message: `Can't find product with id: ${product.id}`
        },
        404
      )
    );
  });

  it('should return error mesage when there is no product id', async () => {
    mocked(productService.getById).mockResolvedValue(null);

    const result = await getProductsById(eventWithoutId, null, null);

    expect(result).toEqual(
      formatJSONResponse(
        {
          message: 'Error: Mandatory path parameter id is missed'
        },
        404
      )
    );
  });

  it('should return error mesage and log error in case of error', async () => {
    mocked(productService.getById).mockRejectedValue(
      new Error('Something went wrong during search')
    );

    const error = jest.spyOn(console, 'error').mockImplementation(() => {});

    const result = (await getProductsById(event, null, null)) as APIGatewayProxyResult;

    expect(result).toEqual(
      formatJSONResponse(
        {
          message: `Something went wrong during search...`
        },
        500
      )
    );
    expect(error).toBeCalledWith('Something went wrong during search');
  });
});
