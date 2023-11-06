'use client'
import { CoinData } from '@/@types/typeCoins'
import { AddCryptonForm } from '@/components/form/AddCryptonForm'
import { Icons } from '@/components/ui/icons'
import { useModalContext } from '@/context/ModalContext'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export function ModalAddCrypto({ coin }: { coin: CoinData }) {
  const { modalCardMyWalletOpen, setModalCardMyWalletOpen } = useModalContext()

  return (
    <Transition appear show={modalCardMyWalletOpen} as={Fragment}>
      <div className="isolate">
        <Dialog
          as="div"
          className="relative"
          onClose={() => setModalCardMyWalletOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 z-40 bg-secondary-500 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-xs transform rounded-lg bg-white p-6 shadow-xl transition-all">
                  <button
                    onClick={() => setModalCardMyWalletOpen(false)}
                    className="absolute right-4 top-4"
                  >
                    <Icons.XMark className="transition-colors hover:fill-secondary-400 active:fill-secondary-600" />
                  </button>
                  <h2 className="text-center">Add Crypto</h2>

                  <AddCryptonForm coin={coin} />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </div>
    </Transition>
  )
}
