import { useForm, type SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import z from "zod";
import { register } from "~/services/auth";

const RegisterUserSchema = z
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

type RegisterUserSchemaType = z.infer<typeof RegisterUserSchema>;

export default function Register() {
  const form = useForm<RegisterUserSchemaType>({
    resolver: zodResolver(RegisterUserSchema),
    defaultValues:{email:"", password:"", confirmPassword:""}, 
  });

  const onSubmit: SubmitHandler<RegisterUserSchemaType> = async (data) => {
    try {
      await register()
    } catch (error) {
      console.error('Registration Failed', error);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Controller
        render={({ field }) => <input placeholder="Enter your email" {...field} />}
        name="email"
        control={form.control}
      />
      <div>{form.formState.errors.email?.message}</div>

      <Controller
        render={({ field }) => <input type="password" placeholder="Enter your password" {...field} />}
        name="password"
        control={form.control}
      />

      <div>{form.formState.errors.password?.message}</div>

      <Controller
        render={({ field }) => <input type="password" placeholder="Confirm your password" {...field} />}
        name="confirmPassword"
        control={form.control}
      />

      <div>{form.formState.errors.confirmPassword?.message}</div>

      <input type="submit" />
    </form>
  );
}

// form.formState.errors.confirmPassword.message