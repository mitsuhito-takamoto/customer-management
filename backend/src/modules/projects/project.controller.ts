import type { Request, Response } from "express";
import { HTTP_STATUS } from "../../constants/httpStatus";
import { projectService } from "./project.service";

export const projectController = {
  list: async (_req: Request, res: Response) => {
    const data = await projectService.list();
    return res.json(data);
  },
  detail: async (req: Request, res: Response) => {
    const data = await projectService.detail(req.params.id);
    if (!data) {
      return res.status(HTTP_STATUS.NOT_FOUND).json({ message: "Project not found" });
    }
    return res.json(data);
  },
  create: async (req: Request, res: Response) => {
    const data = await projectService.create(req.body);
    return res.status(HTTP_STATUS.CREATED).json(data);
  },
  update: async (req: Request, res: Response) => {
    const data = await projectService.update(req.params.id, req.body);
    return res.json(data);
  },
  remove: async (req: Request, res: Response) => {
    await projectService.remove(req.params.id);
    return res.status(HTTP_STATUS.NO_CONTENT).send();
  }
};
