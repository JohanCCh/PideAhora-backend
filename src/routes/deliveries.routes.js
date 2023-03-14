import { Router } from "express";
import * as deliveriesCtrl from "../controllers/deliveries.controller";
import { verifyToken } from "../middlewares";

const router = Router();

router.get("/", deliveriesCtrl.getDeliveries);
router.post("/", verifyToken, deliveriesCtrl.createDelivery);
router.get("/one/:deliveryId", verifyToken, deliveriesCtrl.getDeliveryById);
router.put("/select_d/:deliveryId", verifyToken, deliveriesCtrl.selectDelivery);
router.put("/is_delivered/:deliveryId", verifyToken, deliveriesCtrl.updateDeliveryState);
router.delete("/:deliveryId", verifyToken, deliveriesCtrl.deleteDeliveryById);
router.get("/mydeliveries", verifyToken, deliveriesCtrl.getDeliveriesByUser);
router.get("/myOrder/:deliveryId", verifyToken, deliveriesCtrl.getMyDelivery);

export default router;