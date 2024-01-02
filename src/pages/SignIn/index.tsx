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

const SignInFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'O Email é obrigatório' })
    .email({ message: 'Formato de e-mail Inválido' }),
  password: z
    .string()
    .min(6, { message: 'A senha precisa ter no mínimo 6 caracteres' }),
})

type handleSignInFormData = z.infer<typeof SignInFormSchema>

export const SignIn = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<handleSignInFormData>({
    resolver: zodResolver(SignInFormSchema)
  })

  const { signin } = useUser()

  const handleSubmitForm = async ({
    email,
    password
  }: handleSignInFormData) => {
    console.log('ENtrou handle signin')
    const isLogged = await signin(email, password)
    console.log(isLogged)
    if (isLogged) {
      navigate('/')
      return
    }

    alert('Invalid credentials error')//TODO: Temporário ?
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

            <Link to='/accounts/sign-up'>
              <AnimatedButton
                title='Criar Conta'
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

                <AnimatedButton
                  color='white'
                  title='Entrar'
                  $background='#3577f0'
                  $padding={{ vertical: 1, horizontal: 2.375 }}
                  type={'submit'}
                />

              </form>
            </div>
          </div>
        </section >
      </S.Container >
    </S.Container>
  )
}
