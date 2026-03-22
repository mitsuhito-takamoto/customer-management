import type { Request, Response } from "express";
import { HTTP_STATUS } from "../../constants/httpStatus";
import { customerService } from "./customer.service";

export const customerController = {
  list: async (_req: Request, res: Response) => {
    const data = await customerService.list();
    return res.json(data);
  },
  detail: async (req: Request, res: Response) => {
    const data = await customerService.detail(req.params.id);
    if (!data) {
      return res.status(HTTP_STATUS.NOT_FOUND).json({ message: "Customer not found" });
    }
    return res.json(data);
  },
  create: async (req: Request, res: Response) => {
    const data = await customerService.create(req.body);
    return res.status(HTTP_STATUS.CREATED).json(data);
  },
  update: async (req: Request, res: Response) => {
    const data = await customerService.update(req.params.id, req.body);
    return res.json(data);
  },
  remove: async (req: Request, res: Response) => {
    await customerService.remove(req.params.id);
    return res.status(HTTP_STATUS.NO_CONTENT).send();
  }
};
