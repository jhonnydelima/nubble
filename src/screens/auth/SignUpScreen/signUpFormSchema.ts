import { z } from 'zod';

const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim;

export const signUpFormSchema = z.object({
  username: z.string().regex(userNameRegex, 'username inválido').toLowerCase(),
  fullName: z
    .string()
    .min(5, 'nome completo obrigatório')
    .max(50, 'nome completo deve ter no máximo 50 caracteres')
    .transform(value => {
      return value
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase)
        .join(' ');
    }),
  email: z.string().email('e-mail inválido'),
  password: z.string().min(8, 'senha deve ter no mínimo 8 caracteres'),
});

export type SignUpFormType = z.infer<typeof signUpFormSchema>;
