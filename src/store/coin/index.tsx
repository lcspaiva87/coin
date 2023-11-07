import { typeListCoin } from '@/@types/typeListCoin'
import { create } from 'zustand'

type ActionProps = {
  addCoin: (coin: typeListCoin) => void
}

type StoreProps = {
  state: {
    coin: typeListCoin[]
  }
  actions: ActionProps
}

export const useCoinStore = create<StoreProps>((set) => ({
  state: {
    coin: [],
  },
  actions: {
    addCoin: (coin) =>
      set((state) => ({
        state: { coin: [...state.state.coin, coin] },
      })),
  },
}))
