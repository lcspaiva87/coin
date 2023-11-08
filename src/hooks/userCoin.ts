'use client';
import { typeListCoin } from "@/@types/typeListCoin";
import { fetListOrder, fetchCreateOrder } from "@/data/user";
import { enqueueSnackbar } from "notistack";
import { useMutation, useQuery, useQueryClient } from "react-query";

export const useCoin=(id?:typeListCoin[])=>{
  // etchCreateOrder, {
  //   onError: () => {
  //     enqueueSnackbar("Erro ao criar cryptom, tente novamente", {
  //       variant: "error",
  //     });
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(["Coin", id]);
  //     enqueueSnackbar("cryptom criada com sucesso!", { variant: "success" });
  //   },
  // }
  const queryClient = useQueryClient();
  const createMutation = useMutation({
    mutationFn:fetchCreateOrder,
    mutationKey: ["Coin", id],
    onError: () => {
        enqueueSnackbar("Erro ao criar cryptom, tente novamente", {
             variant: "error",
           });
        },
        onSuccess: () => {
          queryClient.invalidateQueries("Coin");
          enqueueSnackbar("cryptom criada com sucesso!", { variant: "success" });
        },

  });
  const{
    data: coin,
    isLoading,
    isError,
    refetch
  }=useQuery({
    queryKey: ["Coin", id],
    queryFn: () => fetListOrder(),
    staleTime: 30000
  })
  console.log("isLoading",isLoading)
  return{
    coin: coin ?? [],
    createMutation,
    isLoading,
    isError,
    refetch
  }
}
