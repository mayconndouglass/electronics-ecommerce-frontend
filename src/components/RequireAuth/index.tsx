import { SignIn } from '../../pages/SignIn'
import { useUser } from '../../store/useUser'

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { user } = useUser()
  //TODO: Novo problema, quando eu recarrego direto a page do carrinho, ele n espera e a requisição ocorrer e já retorna null

  if (!user) {
    return <SignIn />
  }

  return children
}
