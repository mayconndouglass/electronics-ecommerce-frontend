import { z } from 'zod'

const cpfRegex = /^(\d{3}\.?\d{3}\.?\d{3}-?\d{2}|\d{11})$/
const phoneNumberRegex = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/ // eslint-disable-line
const cepRegex = /^\d{5}-\d{3}$/g

export const CheckoutFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'O nome precisa ter no mínimo 3 caracteres' }),
  lastName: z.string().min(1, { message: 'O sobrenome é obrigatório' }),
  email: z
    .string()
    .min(1, { message: 'O Email é obrigatório' })
    .email({ message: 'Formato de e-mail Inválido' }),
  typePerson: z.enum(['Pessoa Física', 'Pessoa Jurídica']),
  cpf: z
    .string()
    .min(1, { message: 'O CPF precisa ter no mínimo 11 digitos' })
    .max(15)
    .regex(cpfRegex, { message: 'CPF inválido' })
    .transform(cpf => cpf.replace(/\D/g, '')),
  birthdate: z.coerce.date()
    .refine((birthDate) => {
      const currentDate = new Date()
      const diffYears = currentDate.getUTCFullYear() - birthDate.getUTCFullYear()

      if (diffYears > 18) {
        return true
      }

      const currentDateMonth = currentDate.getUTCMonth()
      const birthDateMonth = birthDate.getUTCMonth()
      const currentDateDay = currentDate.getUTCDate()
      const birthDateDay = birthDate.getUTCDate()

      const isOfLegalAge = birthDateMonth < currentDateMonth || (
        birthDateMonth === currentDateMonth && birthDateDay <= currentDateDay
      )

      if (isOfLegalAge) {
        return true
      }

      return false
    }, { message: 'Você precisa ser maior de idade' }),
  firstPhone: z
    .string()
    .regex(phoneNumberRegex, { message: 'Telefone inválido' })
    .transform(phone => Number(phone)),
  secondPhone: z
    .string()
    .optional()
    .refine((value) => {
      if (value) {
        return phoneNumberRegex.test(value)
      }

      return true
    }, {
      message: 'Telefone inválido',
    })
    .transform(phone => Number(phone)),
  zipCode: z.string().regex(cepRegex, { message: 'CEP inválido. Exemplo: 00000-000' }),
  street: z
    .string()
    .min(1, { message: 'Campo obrigatório' })
    .max(300),
  houseNumber: z
    .coerce.number()
    .min(1, { message: 'Campo obrigatório' }),
  state: z
    .string()
    .min(1, { message: 'Campo obrigatório' }),
  city: z
    .string()
    .min(1, { message: 'Campo obrigatório' }),
  neighborhood: z
    .string()
    .min(1, { message: 'Campo obrigatório' }),
  complement: z
    .string()
    .max(300, { message: 'Você atingiu o número máximo de caracteres' }),
  shippingMethod: z.enum(['Correios PAC', 'Correios Sedex', 'Transportadora Própria']),
  paymentMethod: z.enum(['PIX', 'Cartão de Crédito', 'Boleto']),
})
