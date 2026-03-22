import { apiClient } from "./axios";

export const authApi = {
  login: (payload: { email: string; password: string }) =>
    apiClient.post("/auth/login", payload)
};
