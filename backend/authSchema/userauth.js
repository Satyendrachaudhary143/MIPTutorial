import { z } from 'zod';

export const userSchema = z.object({
  fullName: z.string().min(1).trim(),
  email: z.email(),
  password: z.string().min(6),
  mobileNumber: z.string().regex(/^[6-9]\d{9}$/, {
    message: "Invalid Indian mobile number",
  }),
  dob: z.coerce.date(),
  role: z.enum(['user', 'writer', 'admin']).default('user'),
});

export const loginSchema = z.object({
  email: z.email({ message: "Valid email is required" }),
  password: z.string().min(6, { message: "Password is required" }),
});
