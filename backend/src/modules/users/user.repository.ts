import { prisma } from "../../config/db";

export const userRepository = {
  list: () => prisma.user.findMany()
};
