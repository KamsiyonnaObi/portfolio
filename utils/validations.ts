import { z } from "zod";

export const contactSchema = z.object({
  firstName: z.string().min(2).max(20),
  email: z.string().email(),
  message: z.string().min(15).max(300),
  bestContact: z.string(),
});
