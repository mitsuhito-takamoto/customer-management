import { prisma } from "../../config/db";
import type { ProjectPayload } from "./project.types";

export const projectRepository = {
  list: () => prisma.project.findMany({ orderBy: { createdAt: "desc" } }),
  detail: (id: string) => prisma.project.findUnique({ where: { id } }),
  create: (payload: ProjectPayload) => prisma.project.create({ data: payload }),
  update: (id: string, payload: ProjectPayload) =>
    prisma.project.update({ where: { id }, data: payload }),
  remove: (id: string) => prisma.project.delete({ where: { id } })
};
