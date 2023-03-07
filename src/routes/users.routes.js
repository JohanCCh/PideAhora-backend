import { Router } from "express";
import * as userCtrl from "../controllers/users.controller";

const router = Router();

router.get("/", userCtrl.getUsers);
router.post("/", userCtrl.createUser);
router.get("/:userId", userCtrl.getUserById);
router.put("/:userId", userCtrl.updateUser);
router.delete("/:userId", userCtrl.deleteUser);

export default router;