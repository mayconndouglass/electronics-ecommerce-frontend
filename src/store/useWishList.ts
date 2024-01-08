import { create } from 'zustand'
import { CartItemProps } from './useCart'
import { handleLocalStorageToken } from '../utils/handle-local-storage-token'
import { handleFavoriteItemsApi } from '../utils/handle-favorite-items-api'

export type FavoriteItemProps = Omit<CartItemProps, 'quantity'>

type useWishListProps = {
  favorites: FavoriteItemProps[]
  getItems: () => void
  addItemToWishList: (item: FavoriteItemProps) => void
  removeItemFromWishList: (itemId: string) => void
  updateFavoriteItems: () => void
}

export const useWishList = create<useWishListProps>((set, get) => ({
  favorites: [],
  getItems: async () => {
    const tokenExists = handleLocalStorageToken().getToken()

    if (tokenExists) {
      const favoriteItems = await handleFavoriteItemsApi.getItems(tokenExists)

      if (favoriteItems) {
        set({ favorites: [...favoriteItems] })
      }
    }
  },
  addItemToWishList: (item) => {
    set((state) => {
      const itemExists = state.favorites.find(({ id }) => item.id === id)
      const tokenExists = handleLocalStorageToken().getToken()

      if (itemExists) {
        return { favorites: [...state.favorites] }
      }

      if (tokenExists) {
        handleFavoriteItemsApi.addItemToFavorites(
          tokenExists,
          item.id
        )
      }

      return { favorites: [...state.favorites, item] }
    })
  },
  removeItemFromWishList: (itemId: string) => {
    set((state) => {
      const tokenExists = handleLocalStorageToken().getToken()
      const itemIndex = state.favorites.findIndex(({ id }) => itemId === id)

      if (itemIndex === -1) {
        return { favorites: [...state.favorites] }
      }

      state.favorites.splice(itemIndex, 1)

      if (tokenExists) {
        handleFavoriteItemsApi.removeItemFromFavorites(tokenExists, itemId)
      }

      return { favorites: [...state.favorites] }
    })
  },
  updateFavoriteItems: () => {
    const token = handleLocalStorageToken().getToken()

    if (token) {
      handleFavoriteItemsApi.updateItems(token, get().favorites)
        .then(
          () => get().getItems()
        )
    }
  }
}))

useWishList.getState().getItems()
