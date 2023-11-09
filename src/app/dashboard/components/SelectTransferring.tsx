import { Icons } from '@/components/ui/icons'
import { Disclosure, Listbox, Transition } from '@headlessui/react'

import clsx from 'clsx'
import { CheckIcon } from 'lucide-react'
import { Fragment } from 'react'
import { Controller } from 'react-hook-form'


const tradeType = [{ name: 'Transfer in' }, { name: 'Transfer out' }]
type InputProps = {
  name: string
  required?: boolean
  placeholder?: string
  disabled?: boolean
  className?: string
  control?: any
}
export function SelectTransferring({
  name,
  required = false,
  control,
}: InputProps) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required }}
      render={({ field }) => (
        <div className=" top-16 ">
          <div className=" top-16 ">
            <Listbox onChange={field.onChange}>
              <div className="relative mt-1">
                <Listbox.Button className="flex w-full items-center justify-between rounded-md border border-secondary-300 p-4 transition-colors ui-disabled:bg-secondary-200">
                  {({ open }) => (
                    <>
                      {!field.value && (
                        <span className="ml-2">Select transfer</span>
                      )}
                      <div className="flex items-center text-label">
                        <span className="ml-2">{field.value}</span>
                      </div>
                      <Icons.ChevronDown
                        className={`${
                          !open ? 'rotate-180 transform' : ''
                        } ml-auto h-4 w-4 !fill-primary-300 transition-transform `}
                      />
                    </>
                  )}
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className=" sm:text-sm  absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 scrollbar-hide focus:outline-none">
                    {tradeType.map(({ name }, index: number) => (
                      <Listbox.Option
                        key={index}
                        className={({ active }) =>
                          ` relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? 'bg-red-100 text-amber-900'
                              : 'text-gray-900'
                          }`
                        }
                        value={name}
                      >
                        {({ selected }) => (
                          <>
                            <Disclosure>
                              {({ open }) => (
                                <div className="w-full">
                                  <Disclosure.Button
                                    className={clsx(
                                      'flex w-full flex-row items-center gap-2 p-4 ',
                                    )}
                                  >
                                    <p className="text-small-label">{name}</p>
                                  </Disclosure.Button>
                                  <Transition
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                  ></Transition>
                                </div>
                              )}
                            </Disclosure>
                            {selected ? (
                              <span className="text-amber-600 absolute inset-y-0 left-0 flex items-center pl-3">
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
        </div>
      )}
    />
  )
}
