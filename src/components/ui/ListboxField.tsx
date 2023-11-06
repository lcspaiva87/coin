import { CoinData } from "@/@types/typeCoins";
import FormattedNumber from "@/app/(home)/components/formattedNumber";
import { Disclosure, Listbox, Transition } from "@headlessui/react";
import clsx from "clsx";
import Image from "next/image";
import { Fragment, useState } from "react";
import { Icons } from "./icons";

type ListboxField = {
  coinList: CoinData;
  onChange: () => void;
  field: CoinData;
};
export function ListboxField({ coinList, field, onChange }: ListboxField) {
  const [selectedCoin, setSelectedCoin] = useState<CoinData | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  return (
    <div className=" top-16 ">
      <Listbox onChange={onChange}>
        <div className="relative mt-1">
          <Listbox.Button className="flex w-full items-center justify-between rounded-md border border-secondary-300 p-4 transition-colors ui-disabled:bg-secondary-200">
            {({ open }) => (
              <>
                {!field && <span className="ml-2">Choose Crypto</span>}
                <div className="flex items-center text-label">
                  <Image
                    src={field?.image}
                    alt={field?.name}
                    width={16}
                    height={16}
                  />
                  <span className="ml-2">{field?.name}</span>
                </div>
                <Icons.ChevronDown
                  className={`${
                    !open ? "rotate-180 transform" : ""
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
              {coinList.map((coin: CoinData, index: number) => (
                <Listbox.Option
                  key={`name-${index}`}
                  className={({ active }) =>
                    ` relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-red-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={coin}
                >
                  {({ selected }) => (
                    <>
                      <Disclosure>
                        {({ open }) => (
                          <div className="w-full">
                            <Disclosure.Button
                              className={clsx(
                                "flex w-full flex-row items-center gap-2 p-4 ",
                              )}
                              onClick={(event) => {
                                event.stopPropagation();
                                setSelectedCoin(coin);
                                setIsPanelOpen(true);
                              }}
                            >
                              <img
                                src={coin.image}
                                width={24}
                                height={24}
                                alt={coin?.name}
                              />
                              <p className="text-small-label">{coin.name}</p>
                              <Icons.ChevronDown
                                className={`${
                                  open ? "rotate-180 transform" : ""
                                } ml-auto h-4 w-4 !fill-primary-300 transition-transform `}
                              />
                            </Disclosure.Button>
                            <Transition
                              enter="transition duration-100 ease-out"
                              enterFrom="transform scale-95 opacity-0"
                              enterTo="transform scale-100 opacity-100"
                              leave="transition duration-75 ease-out"
                              leaveFrom="transform scale-100 opacity-100"
                              leaveTo="transform scale-95 opacity-0"
                            >
                              {isPanelOpen && selectedCoin === coin && (
                                <Disclosure.Panel className="border-t border-secondary-200 p-4">
                                  <div className="flex items-center justify-between">
                                    <span className="text-small-label text-secondary">
                                      Price
                                    </span>
                                    <FormattedNumber
                                      number={coin.current_price}
                                      options={{
                                        style: "currency",
                                        currency: "USD",
                                        maximumFractionDigits: 2,
                                        minimumFractionDigits: 2,
                                      }}
                                    />
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <span className="text-small-label text-secondary">
                                      Change
                                    </span>
                                    <FormattedNumber
                                      number={coin.price_change_percentage_24h}
                                      className={clsx({
                                        "text-tertiary-700":
                                          coin?.price_change_percentage_24h > 0,
                                        "text-quaternary-700":
                                          coin?.price_change_percentage_24h < 0,
                                      })}
                                      options={{
                                        signDisplay: "always",
                                        style: "percent",
                                        maximumFractionDigits: 2,
                                        minimumFractionDigits: 2,
                                      }}
                                    />
                                  </div>
                                </Disclosure.Panel>
                              )}
                            </Transition>
                          </div>
                        )}
                      </Disclosure>
                      {selected ? (
                        <span className="text-amber-600 absolute inset-y-0 left-0 flex items-center pl-3">
                          <Icons.Lock className="h-5 w-5" aria-hidden="true" />
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
  );
}
