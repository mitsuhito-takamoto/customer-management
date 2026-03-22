import type { NextFunction, Request, Response } from "express";
import { HTTP_STATUS } from "../constants/httpStatus";
import { verifyToken } from "../utils/jwt";

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const header = req.headers.authorization;
  const token = header?.startsWith("Bearer ") ? header.slice(7) : "";

  if (!token) {
    return res.status(HTTP_STATUS.UNAUTHORIZED).json({ message: "Unauthorized" });
  }

  try {
    const decoded = verifyToken(token);
    req.user = { id: decoded.id, role: decoded.role as "admin" | "staff" };
    return next();
  } catch {
    return res.status(HTTP_STATUS.UNAUTHORIZED).json({ message: "Invalid token" });
  }
}
