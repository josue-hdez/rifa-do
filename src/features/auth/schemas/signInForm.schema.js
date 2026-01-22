import { z } from "zod";

export const signInFormSchema = z.object({
  email: z.email("Invalid email address"),
  password: z
    .string()
    .trim()
    .min(8, "Password must be at least 8 characters")
    .max(50, "Password must be less than 50 characters"),
});

export const signInFormDefaultValues = {
  email: "",
  password: "",
};
