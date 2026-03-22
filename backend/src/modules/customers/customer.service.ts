import { customerRepository } from "./customer.repository";
import type { CustomerPayload } from "./customer.types";

export const customerService = {
  list: () => customerRepository.list(),
  detail: (id: string) => customerRepository.detail(id),
  create: (payload: CustomerPayload) => customerRepository.create(payload),
  update: (id: string, payload: CustomerPayload) => customerRepository.update(id, payload),
  remove: (id: string) => customerRepository.remove(id)
};
