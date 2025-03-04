import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { AnimatedButton, CustomInput, FormError } from '@/components'
import { useUser } from '@/store'

import logo from '../../../public/assets/images/logo.avif'
import { SignUpFormSchema } from './schemas/signup-form-schema'
import * as S from './styles'

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
