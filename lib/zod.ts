import { z } from "zod";

export const RegisterFormSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z
    .string()
    .email({ message: "Invalid email" })
    .min(1, { message: "Email is required" }),
  company: z.string().min(1, { message: "Company is required" }),
  phoneNumber: z.string().min(1, { message: "Phone number is required" }),
  country: z.string().min(1, { message: "Country is required" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one digit" })
    .regex(/[\W_]/, {
      message: "Password must contain at least one special character",
    }),
  readPrivacyPolicy: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy policy",
  }),
});
