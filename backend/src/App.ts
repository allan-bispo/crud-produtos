import express, { urlencoded } from "express";
import cors from "cors";
import { ProductsRoutes } from "./routes/ProductsRoutes";

class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    private middlewares(): void {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(urlencoded({extended: true}));
    }

    private routes(): void {
        this.app.use('/products', ProductsRoutes);
    }
}

export default new App().app;