import IProduct from "../interfaces/ProductIterface";
import pool from "../config/database";
import { RowDataPacket, ResultSetHeader } from 'mysql2';

export default class ProductsRepository {
    public async createProduct(product: IProduct): Promise<IProduct> {
        const [result] = await pool.execute<ResultSetHeader>(
            'INSERT INTO products (name, price, description) VALUES (?, ?, ?)',
            [product.name, product.price, product.description || null]
        );

        return {
            id: result.insertId,
            ...product
        };
    }

    public async getProducts(): Promise<IProduct[]> {
        const [rows] = await pool.execute<RowDataPacket[]>(
            'SELECT id, name, price, description FROM products'
        );

        return rows as IProduct[];
    }

    public async getProductsWithId(id: number): Promise<IProduct | undefined> {
        const [rows] = await pool.execute<RowDataPacket[]>(
            'SELECT id, name, price, description FROM products WHERE id = ?',
            [id]
        );

        if (rows.length === 0) {
            return undefined;
        }

        return rows[0] as IProduct;
    }

    public async deleteProduct(id: number): Promise<IProduct[]> {
        await pool.execute(
            'DELETE FROM products WHERE id = ?',
            [id]
        );

        return this.getProducts();
    }
}