import { typeListCoin } from "@/@types/typeListCoin";
import { fetListOrder, fetchCreateOrder } from "@/data/user";
import { enqueueSnackbar } from "notistack";
import { useMutation, useQuery, useQueryClient } from "react-query";

export const useCoin=(id?:typeListCoin[])=>{
  const queryClient = useQueryClient();
  const createMutation = useMutation(fetchCreateOrder, {
    onError: () => {
      enqueueSnackbar("Erro ao criar task, tente novamente", {
        variant: "error",
      });
    },
    onSuccess: () => {
      // Atualize a consulta "Coin" após a criação bem-sucedida
      queryClient.invalidateQueries(["Coin", id]);

      enqueueSnackbar("Task criada com sucesso!", { variant: "success" });
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
  })
  return{
    coin: coin ?? [],
    createMutation,
    isLoading,
    isError,
    refetch
  }
}
