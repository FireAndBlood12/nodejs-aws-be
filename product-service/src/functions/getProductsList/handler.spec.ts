import type { APIGatewayProxyResult } from 'aws-lambda';

import productService from '@services/productService';
import { getProductsList } from './handler';
import { mocked } from 'ts-jest/utils';
import { formatJSONResponse } from '@libs/apiGateway';
import IProduct from '@data/interfaces/IProduct';

const products = [
  {
    id: '7567ec4b-b10c-48c5-9345-fc73c48a80a1',
    title: 'HP ENVY x360',
    description: 'HP ENVY x360 13-ay0008ca FHD convertible laptop - AMD Ryzen™ 5',
    price: 1049.99,
    count: 14,
    imgUrl: 'https://store.hp.com/CanadaStore/Html/Merch/Images/c06562022_209x189.jpg',
    ram: 8,
    storage: '256 GB SSD storage',
    display: '33.8 cm (13.3") diagonal FHD display'
  },
  {
    id: '7567ec4b-b10c-48c5-9345-fc73c48a80a2',
    title: 'HP ProBook 450 G7',
    description: 'HP ProBook 450 G7 15.6” HD Notebook with Windows 10 Pro',
    price: 1029,
    count: 44,
    imgUrl: 'https://store.hp.com/CanadaStore/Html/Merch/Images/c06455780_209x189.jpg',
    ram: 4,
    storage: '500 GB 7200 rpm SATA HDD',
    display: '39.6 cm (15.6") diagonal HD display'
  }
];

jest.mock('@services/productService');

describe('getProductsList', () => {
  it('should call productService to get products', async () => {
    mocked(productService.getAll).mockResolvedValue(products as IProduct[]);

    await getProductsList(null, null, null);

    expect(productService.getAll).toBeCalled();
  });

  it('should return respose with products from productService', async () => {
    mocked(productService.getAll).mockResolvedValue(products as IProduct[]);

    const result = (await getProductsList(null, null, null)) as APIGatewayProxyResult;

    expect(result).toEqual(formatJSONResponse(products));
  });

  it('should return error mesage and log error in case of error', async () => {
    mocked(productService.getAll).mockRejectedValue(
      new Error('Something went wrong during search')
    );

    const error = jest.spyOn(console, 'error').mockImplementation(() => {});

    const result = (await getProductsList(null, null, null)) as APIGatewayProxyResult;

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
