import { z } from 'zod'

export const SignInFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'O Email é obrigatório' })
    .email({ message: 'Formato de e-mail Inválido' }),
  password: z
    .string()
    .min(6, { message: 'A senha precisa ter no mínimo 6 caracteres' }),
})
