import * as S from './styles'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

import logo from '../../../public/assets/images/logo.png'
import { AnimatedButton } from '../../components/AnimatedButton'
import { CustomInput } from '../../components/CustomInput'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useUser } from '../../store/useUser'
import { FormError } from '../../components/FormError'

const SignUpFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'O nome precisa ter no mínimo 3 caracteres' })
    .regex(
      /^([a-z\\-]+)$/i,
      { message: 'O nome só pode ter letras e hifens' }
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

type handleSignUpFormData = z.infer<typeof SignUpFormSchema>

export const SignUp = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<handleSignUpFormData>({
    resolver: zodResolver(SignUpFormSchema)
  })

  const { signup } = useUser()

  const handleSubmitForm = async ({
    name,
    email,
    password
  }: handleSignUpFormData) => {
    const status = await signup(name, email, password)

    if (status === 201) {
      navigate('/accounts/sign-in')
    }
  }

  return (
    <S.Container>
      <S.Container>
        <header>
          <Link to='/'>
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
          </Link>

          <div className="sign-in">
            <p>Já é um membro ?</p>

            <Link to='/accounts/sign-in'>
              <AnimatedButton
                title='Entrar'
                $padding={{ vertical: 1, horizontal: 2.375 }}
                $background='#ff497c'
                color='white'
              />
            </Link>
          </div>
        </header>

        <section>
          <div className="banner">
            <h3>Oferecemos Os Melhores Produtos Para Você</h3>
          </div>

          <div className="container-form-sign-up">
            <div>
              <h3>Eu Sou Novo Aqui</h3>

              <p>Insira seus dados</p>

              <form onSubmit={handleSubmit(handleSubmitForm)}>
                <div>
                  <CustomInput
                    id='name'
                    label='nome'
                    type='text'
                    placeholder='John Doe'
                    {...register('name')}
                  />
                  {errors.name && (
                    <FormError text={errors.name.message ?? ''} />
                  )}
                </div>

                <div>
                  <CustomInput
                    id='email'
                    label='email'
                    type='email'
                    placeholder='email@example.com'
                    {...register('email')}
                  />
                  {errors.email && (
                    <FormError text={errors.email.message ?? ''} />
                  )}
                </div>

                <div>
                  <CustomInput
                    id='password'
                    label='senha'
                    type='password'
                    placeholder='•••••••••'
                    {...register('password')}
                  />
                  {errors.password && (
                    <FormError text={errors.password.message ?? ''} />
                  )}
                </div>

                <div>
                  <AnimatedButton
                    color='white'
                    title='Criar Conta'
                    $background='#3577f0'
                    $padding={{ vertical: 1, horizontal: 2.375 }}
                    type={'submit'}
                  />
                </div>
              </form>
            </div>
          </div>
        </section >
      </S.Container >
    </S.Container>
  )
}
