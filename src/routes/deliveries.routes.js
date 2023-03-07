import { Router } from "express";
import * as deliveriesCtrl from "../controllers/deliveries.controller";

const router = Router();

router.get("/", deliveriesCtrl.getDeliveries);
router.post("/", deliveriesCtrl.createDelivery);
router.get("/:deliveryId", deliveriesCtrl.getDeliveryById);
router.put("/:deliveryId", deliveriesCtrl.updateDeliveryById);
router.delete("/:deliveryId", deliveriesCtrl.deleteDeliveryById);

export default router;