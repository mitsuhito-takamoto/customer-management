import { authRepository } from "./auth.repository";
import { password } from "../../utils/password";
import { signToken } from "../../utils/jwt";
import type { LoginInput } from "./auth.types";

export const authService = {
  login: async ({ email, password: plain }: LoginInput) => {
    const user = await authRepository.findByEmail(email);
    if (!user) {
      return null;
    }

    const matched = await password.compare(plain, user.password);
    if (!matched) {
      return null;
    }

    const token = signToken({ id: user.id, role: user.role });
    return { token, user: { id: user.id, name: user.name, role: user.role } };
  }
};
