import { userRepository } from "./user.repository";

export const userService = {
  list: () => userRepository.list()
};
