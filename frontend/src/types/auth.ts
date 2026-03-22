export type UserRole = "admin" | "staff";

export type AuthUser = {
  id: string;
  name: string;
  role: UserRole;
};
