"use client"
import { Modal } from "@/components/ui/moda";
import { useUser } from "@/hooks/userCoin";
import useModalStore from "@/store/modal";
import { yupResolver } from "@hookform/resolvers/yup";
import { enqueueSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import * as yup from "yup";
export default function FormCreateOrder({ userId }: any) {
  const { createMutation, isLoading: loading, refetch } = useUser();
  const { isOpen, openModal, closeModal } = useModalStore();
  const signInFormSchema = yup.object().shape({
    amount: yup.number().required("amount obrigatório").min(0.00001),
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInFormSchema),
    defaultValues: {
      amount: 0,
    },
  });
  async function onSubmit(data: any) {
    createMutation.mutate(
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
            console.log(error.response.data.message);
          });
        },
      },
    );
    refetch();
  }
  return (
    <Modal isOpen={isOpen} isClose={closeModal}>
      <h2 className="text-center">Add Crypto</h2>
      {/* <form onSubmit={handleSubmit(onSubmit)} className="mt-10 md:w-full">
        <Select
          name="coin"
          control={control}
          coinList={data}
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
      </form> */}
    </Modal>
  );
}
