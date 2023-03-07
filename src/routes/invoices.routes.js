import { Router } from "express";
import * as invoicesCtrl from "../controllers/invoices.controller";

const router = Router();

router.get("/", invoicesCtrl.getInvoices);
router.post("/", invoicesCtrl.createInvoice);
router.get("/:invoiceId", invoicesCtrl.getInvoiceById);
router.put("/:invoiceId", invoicesCtrl.updateInvoiceById);
router.delete("/:invoiceId", invoicesCtrl.deleteInvoiceById);

export default router;