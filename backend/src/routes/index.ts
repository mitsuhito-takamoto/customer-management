import { Router } from "express";
import { authRoutes } from "../modules/auth/auth.routes";
import { userRoutes } from "../modules/users/user.routes";
import { customerRoutes } from "../modules/customers/customer.routes";
import { projectRoutes } from "../modules/projects/project.routes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/customers", customerRoutes);
router.use("/projects", projectRoutes);

export const apiRoutes = router;
