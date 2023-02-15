import { Router } from "express";
import { getAllCartItems } from "../controllers/cartController";

const cartRoutes = Router()


cartRoutes.get('', getAllCartItems)












export default cartRoutes