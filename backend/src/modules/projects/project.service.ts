import { projectRepository } from "./project.repository";
import type { ProjectPayload } from "./project.types";

export const projectService = {
  list: () => projectRepository.list(),
  detail: (id: string) => projectRepository.detail(id),
  create: (payload: ProjectPayload) => projectRepository.create(payload),
  update: (id: string, payload: ProjectPayload) => projectRepository.update(id, payload),
  remove: (id: string) => projectRepository.remove(id)
};
