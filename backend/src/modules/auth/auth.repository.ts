import { prisma } from "../../config/db";

export const authRepository = {
  findByEmail: (email: string) => prisma.user.findUnique({ where: { email } })
};
