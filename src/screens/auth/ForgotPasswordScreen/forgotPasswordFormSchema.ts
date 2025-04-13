import {z} from 'zod';

export const forgotPasswordFormSchema = z.object({
  email: z.string().email('e-mail inválido'),
});

export type ForgotPasswordFormType = z.infer<typeof forgotPasswordFormSchema>;
