import products from '@data/productList';
import IService from './IService';
import IProduct from '@data/interfaces/IProduct';

export class ProductService implements IService<IProduct> {
    products: IProduct[];
    private static instance: IService<IProduct>;

    private constructor() {
        this.products = products;
    }

    static getInstance(): IService<IProduct> {
        if (!ProductService.instance) {
            ProductService.instance = new ProductService();
        }
        return ProductService.instance;
    }

    async getAll(): Promise<IProduct[]> {
        return products;
    }

    async getById(id: string): Promise<IProduct> {
        return products.find((i) => i.id === id) || null;
    }
};

export default ProductService.getInstance();
