import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { AnimatedButton, CustomInput, FormError } from '@/components'
import { useUser } from '@/store/'

import logo from '../../../public/assets/images/logo.avif'
import { SignInFormSchema } from './schemas/signin-form-schema'
import * as S from './styles'

type handleSignInFormData = z.infer<typeof SignInFormSchema>

export const SignIn = () => {
  const [isLoginValid, setIsLoginValid] = useState(true)

  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<handleSignInFormData>({
    resolver: zodResolver(SignInFormSchema)
  })

  const { signin } = useUser()

  const handleSubmitForm = async ({
    email,
    password
  }: handleSignInFormData) => {
    const isLogged = await signin(email, password)

    if (isLogged) {
      navigate('/')
      return
    }

    console.log('deveria ter chegado até aqui ')
    setIsLoginValid(false)
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
              <h3>Faça Login</h3>

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

                  {!isLoginValid && (
                    <FormError text='Usuário Inválido' />
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
