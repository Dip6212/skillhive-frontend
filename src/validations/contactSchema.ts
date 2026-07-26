import { z } from "zod";

export const contactSchema = z.object({
  fullName: z
    .string()
    .min(3, "Full name must contain at least 3 characters"),

  email: z
    .email("Enter a valid email address"),

  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10 digit mobile number"),

  course: z
    .string()
    .min(1, "Please select a course"),

  message: z
    .string()
    .min(10, "Message should contain at least 10 characters")
});

export type ContactFormData = z.infer<typeof contactSchema>;