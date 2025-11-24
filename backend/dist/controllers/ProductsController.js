"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
const ProductsService_1 = __importDefault(require("../services/ProductsService"));
class ProductsController {
    constructor() {
        this.createProduct = (request, response) => __awaiter(this, void 0, void 0, function* () {
            const { name, price, description } = request.body;
            const newProduct = yield this.productsService.createProduct({ name, price, description });
            response.status(201).json(newProduct);
        });
        this.getProducts = (request, response) => __awaiter(this, void 0, void 0, function* () {
            const products = yield this.productsService.getProducts();
            response.status(200).json(products);
        });
        this.getProductsWithId = (request, response) => __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const product = yield this.productsService.getProductsWithId(Number(id));
            response.status(200).json(product);
        });
        this.deleteProduct = (request, response) => __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const newProducts = yield this.productsService.deleteProduct(Number(id));
            response.status(200).json(newProducts);
        });
        this.productsService = new ProductsService_1.default();
    }
}
exports.ProductsController = ProductsController;
