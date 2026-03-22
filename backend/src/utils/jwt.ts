import jwt from "jsonwebtoken";
import { env } from "../config/env";

export function signToken(payload: { id: string; role: string }) {
  return jwt.sign(payload, env.jwtSecret || "dev-secret", {
    expiresIn: env.jwtExpiresIn
  });
}

export function verifyToken(token: string) {
  return jwt.verify(token, env.jwtSecret || "dev-secret") as {
    id: string;
    role: string;
  };
}
