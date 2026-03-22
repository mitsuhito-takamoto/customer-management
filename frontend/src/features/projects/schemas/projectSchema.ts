import { z } from "zod";

export const projectSchema = z.object({
  title: z.string().min(1),
  customerId: z.string().min(1)
});
