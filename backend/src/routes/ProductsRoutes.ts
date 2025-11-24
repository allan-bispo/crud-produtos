import { Router } from "express";
import { ProductsController } from "../controllers/ProductsController";

const router = Router();
const productsController = new ProductsController();

router.post('/createProduct', productsController.createProduct);
router.get('/getProducts', productsController.getProducts);
router.get('/getProduct/:id', productsController.getProductsWithId);
router.delete('/delete/:id', productsController.deleteProduct);
export { router as ProductsRoutes };