import { z } from 'zod'

export const SignUpFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'O nome precisa ter no mínimo 3 caracteres' })
    .regex(
      /^([a-zA-Z\s]+)$/i,
      { message: 'O nome só pode ter letras e espaços' }
    )
    .transform(name => {
      return name.trim().split(' ').map(word => {
        return word[0].toLocaleUpperCase().concat(word.substring(1))
      }).join(' ')
    }),
  email: z
    .string()
    .min(1, { message: 'O Email é obrigatório' })
    .email({ message: 'Formato de e-mail Inválido' }),
  password: z
    .string()
    .min(6, { message: 'A senha precisa ter no mínimo 6 caracteres' }),
})
