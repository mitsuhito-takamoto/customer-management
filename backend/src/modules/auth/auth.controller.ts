import type { Request, Response } from "express";
import { HTTP_STATUS } from "../../constants/httpStatus";
import { authService } from "./auth.service";

export const authController = {
  login: async (req: Request, res: Response) => {
    const result = await authService.login(req.body);

    if (!result) {
      return res.status(HTTP_STATUS.UNAUTHORIZED).json({ message: "Invalid credentials" });
    }

    return res.status(HTTP_STATUS.OK).json(result);
  }
};
