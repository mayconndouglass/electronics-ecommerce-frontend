import { SignIn } from '@/pages/SignIn'
import { useUser } from '@/store'

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { user } = useUser()

  if (!user) {
    return <SignIn />
  }

  return children
}
