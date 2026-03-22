import { prisma } from "../../config/db";
import type { CustomerPayload } from "./customer.types";

export const customerRepository = {
  list: () => prisma.customer.findMany({ orderBy: { createdAt: "desc" } }),
  detail: (id: string) => prisma.customer.findUnique({ where: { id } }),
  create: (payload: CustomerPayload) => prisma.customer.create({ data: payload }),
  update: (id: string, payload: CustomerPayload) =>
    prisma.customer.update({ where: { id }, data: payload }),
  remove: (id: string) => prisma.customer.delete({ where: { id } })
};
