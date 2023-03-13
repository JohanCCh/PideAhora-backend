import { Router } from "express";
import * as  invoiceDetailsCtrl from "../controllers/invoice_detail.controller";
import { verifyToken } from "../middlewares";

const router = Router();

router.get("/", verifyToken, invoiceDetailsCtrl.getInvoiceDetails);
router.post("/", verifyToken, invoiceDetailsCtrl.createInvoiceDetail);
router.get("/:invoiceDetailId", verifyToken, invoiceDetailsCtrl.getInvoiceDetailById);
router.put("/:invoiceDetailId", verifyToken, invoiceDetailsCtrl.updateInvoiceDetailById);
router.delete("/:invoiceDetailId", verifyToken, invoiceDetailsCtrl.deleteInvoiceDetailById);

export default router;