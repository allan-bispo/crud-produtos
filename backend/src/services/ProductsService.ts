import IProduct from "../interfaces/ProductIterface";
import ProductsRepository from "../repositories/ProductsRepository";

export default class ProductsService {
    public productsRepository: ProductsRepository;

    constructor() {
        this.productsRepository = new ProductsRepository();
    }

    async createProduct(product: IProduct) {
        const productCreated = await this.productsRepository.createProduct(product);
        return productCreated;
    }

    async getProducts() {
        return await this.productsRepository.getProducts();
    }

    async getProductsWithId(id: number) {
        return await this.productsRepository.getProductsWithId(id);
    }

    async deleteProduct(id: number) {
        return await this.productsRepository.deleteProduct(id);
    }
}
