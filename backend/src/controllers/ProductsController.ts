import { Request, Response } from "express";
import ProductsService from "../services/ProductsService";
import IProduct from "src/interfaces/ProductIterface";
export class ProductsController {
    private productsService: ProductsService;

    constructor() {
        this.productsService = new ProductsService();
    }

    public createProduct = async (request: Request, response: Response) => {
        const { name, price, description }: IProduct = request.body;
        const newProduct = await this.productsService.createProduct({name, price, description});
        response.status(201).json(newProduct);
    }

    public getProducts = async (request:Request, response: Response) => {
        const products = await this.productsService.getProducts();
        response.status(200).json(products);
    }

    public getProductsWithId = async (request: Request, response: Response) => {
        const { id } = request.params;
        const product = await this.productsService.getProductsWithId(Number(id));
        response.status(200).json(product);
    }

    public deleteProduct = async (request: Request, response: Response) => {
        const { id } = request.params;
        const newProducts = await this.productsService.deleteProduct(Number(id));
        response.status(200).json(newProducts);
    }
}