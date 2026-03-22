import type { Request, Response } from "express";
import { HTTP_STATUS } from "../constants/httpStatus";

export function notFoundHandler(_req: Request, res: Response) {
  return res.status(HTTP_STATUS.NOT_FOUND).json({ message: "Not Found" });
}
