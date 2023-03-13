import { Router } from "express";
import * as employeeCtrl from "../controllers/employees.controller";
import { verifyToken } from "../middlewares";

const router = Router();

router.post("/", verifyToken, employeeCtrl.createEmployee);
router.get("/", employeeCtrl.getEmployees);
router.get("/token", employeeCtrl.getEmployeeByToken);
router.put("/:employeeId", verifyToken, employeeCtrl.updateEmployeeById);
router.delete("/:employeeId", verifyToken, employeeCtrl.deleteEmployeeById);

export default router;