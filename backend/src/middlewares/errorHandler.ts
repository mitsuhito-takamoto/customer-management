import type { NextFunction, Request, Response } from "express";
import { HTTP_STATUS } from "../constants/httpStatus";

export function errorHandler(err: Error, _req: Request, res: Response, _next: NextFunction) {
  return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
    message: err.message || "Internal Server Error"
  });
}
