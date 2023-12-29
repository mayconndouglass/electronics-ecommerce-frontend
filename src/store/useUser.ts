import { create } from 'zustand'
import { useCart } from './useCart'
import { handleUserApi } from '../utils/handle-user-api'
import { handleLocalStorageToken } from '../utils/handle-local-storage-token'

type User = {
  id: string
  name: string
  email: string
}

type useUserProps = {
  user: User | null
  fetchUserData: () => void
  signin: (email: string, password: string) => Promise<boolean>
  signup: (name: string, email: string, password: string)
    => Promise<number | undefined>
  logout: () => void
}

export const useUser = create<useUserProps>((set) => ({
  user: null,
  token: null,
  fetchUserData: async () => {
    const tokenExists = handleLocalStorageToken().getToken()

    if (tokenExists) {
      const user: User | null = await handleUserApi.validateToken(tokenExists)
      set({ user })
    }
  },
  signin: async (email: string, password: string) => {
    if (email && password) {
      const userData = await handleUserApi.signin(email, password)

      if (userData) {
        const { user, token } = userData

        set({ user })
        handleLocalStorageToken().setToken(token)

        const doesCartHaveItems = useCart.getState().items.length

        doesCartHaveItems
          ? useCart.getState().updateItems()
          : useCart.getState().getItems()

        return true
      }
    }

    return false
  },
  signup: async (name: string, email: string, password: string) => {
    if (name && email && password) {
      const status = await handleUserApi.signup(name, email, password)

      return status
    }
  },
  logout: async () => {
    set({ user: null })
    localStorage.setItem('ut', '')
  },
}))

useUser.getState().fetchUserData()
