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
const database_1 = __importDefault(require("../config/database"));
class ProductsRepository {
    createProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            const [result] = yield database_1.default.execute('INSERT INTO products (name, price, description) VALUES (?, ?, ?)', [product.name, product.price, product.description || null]);
            return Object.assign({ id: result.insertId }, product);
        });
    }
    getProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield database_1.default.execute('SELECT id, name, price, description FROM products');
            return rows;
        });
    }
    getProductsWithId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield database_1.default.execute('SELECT id, name, price, description FROM products WHERE id = ?', [id]);
            if (rows.length === 0) {
                return undefined;
            }
            return rows[0];
        });
    }
    deleteProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.execute('DELETE FROM products WHERE id = ?', [id]);
            return this.getProducts();
        });
    }
}
exports.default = ProductsRepository;
