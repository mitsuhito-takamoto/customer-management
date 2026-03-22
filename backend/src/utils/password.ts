import bcrypt from "bcrypt";

export const password = {
  hash: (plain: string) => bcrypt.hash(plain, 10),
  compare: (plain: string, hashed: string) => bcrypt.compare(plain, hashed)
};
