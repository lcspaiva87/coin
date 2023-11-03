'use client'

import { fetchCoin } from '@/data/fetchCoin';
import { fetchLogin } from '@/data/use';
import { enqueueSnackbar } from "notistack";
import { useMutation, useQuery, useQueryClient } from 'react-query';

export const useCoin = () => {
  const queryClient = useQueryClient();
  const loginMutation = useMutation(fetchLogin,{
    onError: () => {
      enqueueSnackbar("error when logging in", {
        variant: "error",
      });
    },
    onSuccess: (_,data) => {
      queryClient.setQueryData(["user"], () => 
     
        data,
      );
      enqueueSnackbar("Task criada com sucesso!", { variant: "success" });
    },
  })
  const {
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['user'],
    queryFn: () => fetchCoin(),
  })
  return {
    isLoading,
    isError,
    loginMutation
  }
}
