import { SignupOrSignin } from '../../pages/SignupOrSignin'
import { useUser } from '../../store/useUser'

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { user } = useUser()
  //TODO: Novo problema, quando eu recarrego direto a page do carrinho, ele n espera e a requisição ocorrer e já retorna null
  console.log('REQUIRED', user)

  if (!user) {
    return <SignupOrSignin />
  }

  return children
}
//TODO: O programador jovem usou outlet...bem mais interessante
