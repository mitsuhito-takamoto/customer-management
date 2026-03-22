import type { Request, Response } from "express";
import { userService } from "./user.service";

export const userController = {
  list: async (_req: Request, res: Response) => {
    const users = await userService.list();
    return res.json(users);
  }
};
