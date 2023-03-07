import { Router } from "express";
import * as categoriesCtrl from "../controllers/categories.controller";

const router = Router();

router.get("/", categoriesCtrl.getCategories);
router.get("/:categoryId", categoriesCtrl.getCategoryById);
router.post("/", categoriesCtrl.createCategory);
router.put("/:categoryId", categoriesCtrl.updateCategoryById);
router.delete("/:categoryId", categoriesCtrl.deleteCategoryById);

export default router;