"use client";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import Button from "@/components/ui/button";
import { LoadingSpinner } from "@/components/ui/loadingSpinner";
import { Modal } from "@/components/ui/moda";
import { useCoin } from "@/hooks/userCoin";
import useModalStore from "@/store/modal";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
type FormValues = {
  amount: number;
  coin: any;
};
export default function FormCreateOrder({ userId, data }: any) {
  const { createMutation, isLoading: loading, refetch } = useCoin();
  const { isOpen, openModal, closeModal } = useModalStore();

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
    <Modal isOpen={isOpen} isClose={closeModal}>
      <h2 className="text-center">Add Crypto</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-10 md:w-full">
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
          {loading ? <LoadingSpinner className="mx-auto" /> : "Subscribe"}
        </Button>
      </form>
    </Modal>
  );
}
