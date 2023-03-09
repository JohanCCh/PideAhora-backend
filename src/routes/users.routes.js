import { Router } from "express";
import * as userCtrl from "../controllers/users.controller";
import { verifyToken } from "../middlewares";

const router = Router();

router.get("/", userCtrl.getUsers);
router.post("/", verifyToken, userCtrl.createUser);
router.get("/:userId", userCtrl.getUserById);
router.put("/:userId", verifyToken, userCtrl.updateUser);
router.delete("/:userId", verifyToken, userCtrl.deleteUser);
router.post("/get-user-token", verifyToken, userCtrl.getUserByToken);

export default router;