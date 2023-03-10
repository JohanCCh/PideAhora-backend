import { Router } from "express";
import * as productsCtrl from "../controllers/products.controller";
import { verifyToken } from "../middlewares";

const router = Router();

router.get("/", productsCtrl.getProducts);
router.post("/", verifyToken, productsCtrl.createProduct);
router.get("/:productId", productsCtrl.getProductById);
router.put("/:productId", verifyToken, productsCtrl.updateProductById);
router.delete("/:productId", verifyToken, productsCtrl.deleteProductById);
router.post("/stock/:productId", verifyToken, productsCtrl.subtractStock);

export default router;