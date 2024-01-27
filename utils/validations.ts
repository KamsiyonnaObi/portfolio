import { z } from "zod";

export const contactSchema = z.object({
  firstName: z.string().min(2).max(20),
  email: z.string().email(),
  message: z.string().min(20).max(300),
  bestContact: z.string(),
});

export type ContactSchema = z.infer<typeof contactSchema>;
