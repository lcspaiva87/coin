"use client";
import { Input } from "@/components/ui/Input";

import Button from "@/components/ui/button";
import { LoadingSpinner } from "@/components/ui/loadingSpinner";
import { userCreateOrder } from "@/hooks/user";

import { getUser } from "@/lib/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { enqueueSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import * as yup from "yup";

export function AddCryptonForm() {
  const { mutate: CreateOrde, isLoading: loading } = userCreateOrder();

  const { userId } = getUser();

  const signInFormSchema = yup.object().shape({
    amount: yup.number().required("amount obrigatório").min(0.00001),
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  async function onSubmit(data: any) {
    CreateOrde(
      {
        amount: Number(data.amount),
        icon: data?.coin?.image,
        name: data?.coin?.name,
        percentage: Number(data?.coin.price_change_percentage_24h),
        priceUsd: Number(data?.coin.current_price),
        userId: String(userId),
        acronym: String(data?.coin?.symbol),
      },
      {
        onError: (error: any) => {
          Object.keys(error?.response?.data).forEach((field: any) => {
            enqueueSnackbar(error.response.data.message, {
              variant: "error",
            });
          });
        },
      },
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-10 md:w-full">
      {/* <Select
        name="coin"
        control={control}
        coinList={coinList}
        disabled={loading}
      /> */}
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
  );
}
