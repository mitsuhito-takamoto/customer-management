import { apiClient } from "./axios";

export const customerApi = {
  list: () => apiClient.get("/customers"),
  detail: (id: string) => apiClient.get(`/customers/${id}`)
};
