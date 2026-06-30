import { z } from "zod";

export const SignupSchema = z
  .object({
    fullName: z
      .string()
      .min(1, "Full name is required")
      .regex(
        /^[A-Za-z]+ [A-Za-z]+$/,
        "Please enter your full name (e.g. John Doe)",
      ),
    email: z.email("Please enter a valid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[!@#$%^&*()_+-=]/,
        "Password must contain at least one special character",
      ),

    confirmPassword: z.string().min(1, "Confirm password is required"),
    termAndCondition: z.literal(true, {
      error: "You must accept the Terms & Conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"],
  });
