import { apiClient } from "./axios";

export const projectApi = {
  list: () => apiClient.get("/projects"),
  detail: (id: string) => apiClient.get(`/projects/${id}`)
};
