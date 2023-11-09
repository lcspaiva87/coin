"use client";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import Button from "@/components/ui/button";
import { LoadingSpinner } from "@/components/ui/loadingSpinner";
import { useCoin } from "@/hooks/userCoin";
import useModalStore from "@/store/modal";
import { Dialog, Transition } from "@headlessui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Fragment } from "react";
import { useForm } from "react-hook-form";

import { Icons } from "@/components/ui/icons";
import * as yup from "yup";
type FormValues = {
  amount: number;
  coin: any;
};
export default function FormCreateOrder({ userId, data }: any) {
  const { createMutation, isLoading: loading } = useCoin();
  const { isOpen, closeModal } = useModalStore();

  const signInFormSchema = yup.object().shape({
    amount: yup.number().required("amount obrigatório").min(0.00001),
    coin: yup.object().required("coin obrigatório"),
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(signInFormSchema),
    defaultValues: {
      amount: 0,
      coin: [],
    },
  });

  async function onSubmit({ amount, coin }: FormValues) {
    createMutation.mutate({
      amount: amount,
      icon: coin.image,
      name: coin.name,
      percentage: Number(coin.price_change_percentage_24h),
      priceUsd: Number(coin.current_price),
      userId: String(userId),
      acronym: String(coin?.symbol),
    });

    closeModal();
  }
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <div className="isolate">
        <Dialog as="div" className="relative" onClose={closeModal}>
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
                    onClick={closeModal}
                    className="absolute right-4 top-4"
                  >
                    <Icons.XMark className="transition-colors hover:fill-secondary-400 active:fill-secondary-600" />
                  </button>
                  <h2 className="text-center">Add Crypto</h2>

                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mt-10 md:w-full"
                  >
                    <Select
                      name="coin"
                      control={control}
                      coinList={data.data}
                      disabled={loading}
                    />
                    <Input
                      type="number"
                      name="amount"
                      placeholder="0,00"
                      required
                      className="mt-4 w-full"
                      control={control}
                      disabled={loading}
                      dataTest="input-amount-crypton"
                    />
                    <h1>{errors.amount?.message}</h1>
                    <Button
                      dataTest="button-add-crypton"
                      disabled={!errors}
                      className="mt-4 w-full py-3 shadow-xl md:mt-[21px]"
                      type="submit"
                    >
                      {loading ? (
                        <LoadingSpinner className="mx-auto" />
                      ) : (
                        "Subscribe"
                      )}
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
