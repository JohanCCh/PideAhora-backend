import { Router } from "express";
import * as deliveriesCtrl from "../controllers/deliveries.controller";
import { verifyToken } from "../middlewares";

const router = Router();

router.get("/", deliveriesCtrl.getDeliveries);
router.post("/", verifyToken, deliveriesCtrl.createDelivery);
//router.get("/:deliveryId", verifyToken, deliveriesCtrl.getDeliveryById);
router.put("/:deliveryId", verifyToken, deliveriesCtrl.updateDeliveryById);
router.delete("/:deliveryId", verifyToken, deliveriesCtrl.deleteDeliveryById);
router.get("/mydeliveries", verifyToken, deliveriesCtrl.getDeliveriesByUser);

export default router;