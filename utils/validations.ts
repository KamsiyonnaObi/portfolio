import { z } from "zod";

export const contactSchema = z.object({
  firstName: z
    .string()
    .min(2, "Please enter your name (at least 2 characters)")
    .max(20, "Please keep your name under 20 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z
    .string()
    .min(20, "Please write at least 20 characters so I know how to help")
    .max(300, "Please keep your message under 300 characters"),
  bestContact: z.string(),
});

export type ContactSchema = z.infer<typeof contactSchema>;
