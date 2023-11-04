'use client'
import { BrandName } from '@/components/brandName'

import { Icons } from '@/components/ui/icons'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { FormSignUp } from './form/formSignup'


export function ModalSignUp({open, closse}:{
  open: boolean,
  closse: React.Dispatch<React.SetStateAction<boolean>>
}) {

  return (
    <Transition appear show={open} as={Fragment}>
      <div className="isolate">
        <Dialog
          as="div"
          className="relative"
          onClose={() => closse(false)}
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
                    onClick={() => closse(false)}
                    className="absolute right-4 top-4"
                  >
                    <Icons.XMark className="transition-colors color-secondary-400 hover:fill-secondary-300 active:fill-secondary-300" />
                  </button>
                  <h2 className="text-center">
                    Sign in to <BrandName />
                  </h2>

                  <FormSignUp />
                  <div className="mt-4 text-small-label">
                    <span className="hidden md:inline">
                      Don{"'"}t have an account?{' '}
                    </span>
                    <button

                      className="font-bold hover:underline"
                    >
                      Sign up to <BrandName />
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </div>
    </Transition>
  )
}
