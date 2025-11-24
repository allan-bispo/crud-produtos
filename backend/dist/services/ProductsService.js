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
const ProductsRepository_1 = __importDefault(require("../repositories/ProductsRepository"));
class ProductsService {
    constructor() {
        this.productsRepository = new ProductsRepository_1.default();
    }
    createProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productCreated = yield this.productsRepository.createProduct(product);
                return productCreated;
            }
            catch (err) {
                console.error(err);
                throw new Error();
            }
        });
    }
    getProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.productsRepository.getProducts();
            }
            catch (err) {
                console.error(err);
            }
        });
    }
    getProductsWithId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.productsRepository.getProductsWithId(id);
            }
            catch (err) {
                console.error(err);
            }
        });
    }
    deleteProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.productsRepository.deleteProduct(id);
            }
            catch (err) {
                console.error(err);
            }
        });
    }
}
exports.default = ProductsService;
