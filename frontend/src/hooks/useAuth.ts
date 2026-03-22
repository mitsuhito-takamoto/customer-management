import { useMemo } from "react";
import { authStore } from "../store/authStore";

export function useAuth() {
  return useMemo(() => ({
    isAuthenticated: !!authStore.token
  }), []);
}
