/*export interface RegisterDto {
  email: string;
  password: string;
  name: string;
}*/

import z from "zod"

export const RegisterUserSchema = z
  .object({
    email: z
      .email()
      .min(1, { message: 'Please enter an email address' }),
    password: z
      .string()
      .min(1, { message: 'Please enter a password' })
      .min(6, { message: 'Password must be at least 6 characters' }),
    confirmPassword: z
      .string()
      .min(1, { message: 'Please confirm your password' })
      .min(6, { message: 'Password must be at least 6 characters' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

export type RegisterUserSchemaType = z.infer<typeof RegisterUserSchema>;

export interface LoginDto {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: {
    id: string;
    email: string;
    name: string;
    createdAt: Date;
  };
  token: string;
}

export interface JwtPayload {
  userId: string;
  email: string;
}
