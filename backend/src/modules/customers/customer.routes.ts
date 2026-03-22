import { Router } from "express";
import { authMiddleware } from "../../middlewares/authMiddleware";
import { validateRequest } from "../../middlewares/validateRequest";
import { customerController } from "./customer.controller";
import { customerSchema } from "./customer.schema";

const router = Router();

router.use(authMiddleware);
router.get("/", customerController.list);
router.get("/:id", customerController.detail);
router.post("/", validateRequest(customerSchema), customerController.create);
router.put("/:id", validateRequest(customerSchema), customerController.update);
router.delete("/:id", customerController.remove);

export const customerRoutes = router;
