import { z } from 'zod';

export const loginFormSchema = z.object({
  email: z.string().email('e-mail inválido'),
  password: z.string().min(1, 'senha obrigatória'),
});

export type LoginFormType = z.infer<typeof loginFormSchema>;
