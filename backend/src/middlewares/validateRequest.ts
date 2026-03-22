import type { NextFunction, Request, Response } from "express";
import type { ZodSchema } from "zod";
import { HTTP_STATUS } from "../constants/httpStatus";

export function validateRequest(schema: ZodSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const parsed = schema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(HTTP_STATUS.BAD_REQUEST).json({ errors: parsed.error.flatten() });
    }
    req.body = parsed.data;
    return next();
  };
}
