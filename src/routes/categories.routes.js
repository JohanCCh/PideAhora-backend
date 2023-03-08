import { Router } from "express";
import * as categoriesCtrl from "../controllers/categories.controller";
import { verifyToken } from "../middlewares";

const router = Router();

router.get("/", categoriesCtrl.getCategories);
router.get("/:categoryId", categoriesCtrl.getCategoryById);
router.post("/", verifyToken, categoriesCtrl.createCategory);
router.put("/:categoryId", verifyToken, categoriesCtrl.updateCategoryById);
router.delete("/:categoryId", verifyToken, categoriesCtrl.deleteCategoryById);

export default router;