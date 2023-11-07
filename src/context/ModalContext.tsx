'use client'
import { typeListCoin } from '@/@types/typeListCoin'
import { createContext, useContext, useState } from 'react'
interface ModalContextProps {
  modalSignInTOpen: boolean
  setModalModalSignInToOpen: React.Dispatch<React.SetStateAction<boolean>>
  modalSignUpOpen: boolean
  setModalSignUpOpen: React.Dispatch<React.SetStateAction<boolean>>
  modalCardMyWalletOpen: boolean
  setModalCardMyWalletOpen: React.Dispatch<React.SetStateAction<boolean>>
  modalTransferringCrypto: boolean
  setModalTransferringCrypto: React.Dispatch<React.SetStateAction<boolean>>
  valueTrade: typeListCoin[]
  setvalueTrade: (coin: typeListCoin[]) => void
  isLoading: boolean
  setisLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined)
type ModalProviderProviderProps = {
  children: React.ReactNode
}
export const ModalProvider = ({ children }: ModalProviderProviderProps) => {
  const [modalSignInTOpen, setModalModalSignInToOpen] = useState(false)
  const [modalSignUpOpen, setModalSignUpOpen] = useState(false)
  const [modalCardMyWalletOpen, setModalCardMyWalletOpen] = useState(false)
  const [modalTransferringCrypto, setModalTransferringCrypto] = useState(false)
  const [valueTrade, setvalueTrade] = useState<typeListCoin[]>([])
  const [isLoading, setisLoading] = useState(false)
  return (
    <ModalContext.Provider
      value={{
        modalSignInTOpen,
        setModalModalSignInToOpen,
        modalSignUpOpen,
        setModalSignUpOpen,
        modalCardMyWalletOpen,
        setModalCardMyWalletOpen,
        setModalTransferringCrypto,
        modalTransferringCrypto,
        valueTrade,
        setvalueTrade,
        isLoading,
        setisLoading,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export const useModalContext = (): ModalContextProps => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModalContext must be used within ModalProvider')
  }
  return context
}
