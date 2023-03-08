import { Router } from "express";
import * as invoicesCtrl from "../controllers/invoices.controller";
import { verifyToken } from "../middlewares";

const router = Router();

router.get("/", verifyToken, invoicesCtrl.getInvoices);
router.post("/", verifyToken, invoicesCtrl.createInvoice);
router.get("/:invoiceId", verifyToken, invoicesCtrl.getInvoiceById);
router.put("/:invoiceId", verifyToken, invoicesCtrl.updateInvoiceById);
router.delete("/:invoiceId", verifyToken, invoicesCtrl.deleteInvoiceById);

export default router;