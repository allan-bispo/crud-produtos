"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductsData {
    getData() {
        const products = [
            {
                "id": 1,
                "name": "test",
                "price": 200,
                "description": "product test"
            },
            {
                "id": 2,
                "name": "test 2",
                "price": 400,
                "description": "product test 2"
            }
        ];
        return products;
    }
}
exports.default = ProductsData;
