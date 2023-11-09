"use client";
import { Input } from "@/components/ui/Input";
import Button from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { LoadingSpinner } from "@/components/ui/loadingSpinner";
import { useCoin } from "@/hooks/userCoin";
import useModalStore from "@/store/modal";
import { Dialog, Transition } from "@headlessui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { SelectTransferring } from "./SelectTransferring";
type FormValues = {
  amount: number;
  type_trade: string;
};
const signInFormSchema = yup.object().shape({
  amount: yup.number().required("amount obrigatório").min(0.00001),
  type_trade: yup.string().required("type_trade obrigatório")
});
export function FormTrade({userId}:{userId:string}) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { createMutationTrade, isLoading } = useCoin();
  const { isOpenTrade, closeModalTrade, coinTrade } = useModalStore();
  const {
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInFormSchema),
    defaultValues:{
      amount:0,
      type_trade:''
    }
  });

  async function onSubmit({ type_trade, amount }: FormValues) {
    console.log(type_trade)
    createMutationTrade.mutate({
      amount: Number(amount),
      nameCoin: String(coinTrade[0].name),
      userId: String(userId),
      type_trade: String(type_trade),
      idCoin: String(coinTrade[0].id),
    });
    closeModalTrade()
  }
  return (
    <Transition appear show={isOpenTrade} as={Fragment}>
      <div className="isolate">
        <Dialog as="div" className="relative" onClose={closeModalTrade}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 z-40 bg-secondary-500/25 bg-opacity-75" />
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
                    onClick={closeModalTrade}
                    className="absolute right-4 top-4"
                  >
                    <Icons.XMark className="transition-colors hover:fill-secondary-400 active:fill-secondary-600" />
                  </button>
                  <h2 className="text-center font-bold ">Tansfer Crypto</h2>
                  <hr className="mt-4 text-secondary-200 lg:mt-6" />
                  <div className="mt-4 flex items-center  justify-around lg:mt-6">
                    <span className="text-small-label text-secondary-400 lg:text-label">
                      You are transferring
                    </span>
                    {coinTrade.map((item) => (
                      <div
                        className="flex items-center text-label lg:text-base"
                        key={`by-${item.name}`}
                      >
                        <Image
                          width={24}
                          height={24}
                          src={item.icon}
                          alt={item.name}
                        />
                        <span className="ml-2">{item.name}</span>
                        <span className="ml-1 text-secondary">
                          {item.acronym}
                        </span>
                      </div>
                    ))}
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <SelectTransferring
                      name="type_trade"
                      control={control}
                      disabled={isLoading}
                    />
                    <Input
                      type="number"
                      name="amount"
                      placeholder="0,00"
                      required
                      className="mt-4 w-full"
                      control={control}
                      disabled={isLoading}
                      dataTest="input-amount"
                    />

                    <Button
                      dataTest="transfer-crypto-button"
                      className="mt-4 w-full py-3 lg:mt-6"
                      type="submit"
                    >
                      Transfer Crypto
                      {isLoading ? <LoadingSpinner className="mx-auto" /> : 'Transfer Crypto'}
                    </Button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </div>
    </Transition>
  );
}
