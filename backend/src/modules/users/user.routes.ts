import { Router } from "express";
import { userController } from "./user.controller";
import { authMiddleware } from "../../middlewares/authMiddleware";

const router = Router();

router.get("/", authMiddleware, userController.list);

export const userRoutes = router;
