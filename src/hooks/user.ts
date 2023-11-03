'use client'

import { fetchCoin } from '@/data/fetchCoin';
import { fetchLogin } from '@/data/use';
import { enqueueSnackbar } from "notistack";
import { useMutation, useQuery, useQueryClient } from 'react-query';

export const userFetch = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const queryClient = useQueryClient();
  // eslint-disable-next-line react-hooks/rules-of-hooks
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
  // eslint-disable-next-line react-hooks/rules-of-hooks
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
