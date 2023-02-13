import { Router } from "express";
import { addProduct, getAllProducts } from "../controllers/productControllers";

const productsRouter = Router()

productsRouter.get('', getAllProducts)

productsRouter.post('', addProduct)

export default productsRouter