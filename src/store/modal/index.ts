import { typeListCoin } from '@/@types/typeListCoin';
import create from 'zustand';

type ModalState = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  isOpenTrade: boolean;
  openModalTrade: () => void;
  closeModalTrade: () => void;
  coinTrade: typeListCoin[];
  setvalueTrade: (coin: typeListCoin[]) => void
};

const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
  isOpenTrade: false,
  openModalTrade: () => set({ isOpenTrade: true }),
  closeModalTrade: () => set({ isOpenTrade: false }),
  coinTrade: [],
  setvalueTrade: (coin) => set({ coinTrade: coin }),
}));

export default useModalStore;
