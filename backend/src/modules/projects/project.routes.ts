import { Router } from "express";
import { authMiddleware } from "../../middlewares/authMiddleware";
import { validateRequest } from "../../middlewares/validateRequest";
import { projectController } from "./project.controller";
import { projectSchema } from "./project.schema";

const router = Router();

router.use(authMiddleware);
router.get("/", projectController.list);
router.get("/:id", projectController.detail);
router.post("/", validateRequest(projectSchema), projectController.create);
router.put("/:id", validateRequest(projectSchema), projectController.update);
router.delete("/:id", projectController.remove);

export const projectRoutes = router;
