/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { fetchCreateOrder, fetchLogin, fetchRegister } from '@/data/user';
import Cookie from 'js-cookie';
import { useRouter } from 'next/navigation';
import { enqueueSnackbar } from "notistack";
import { useMutation, useQueryClient } from 'react-query';

export const userFetch = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()
  // eslint-disable-next-line react-hooks/rules-of-hooks
 return  useMutation(fetchLogin,{
    onError: () => {
      enqueueSnackbar("error try again", {
        variant: "error",
      });

    },
    onSuccess: (data) => {
      const cookieExpiresInSeconds = 60 * 60 * 24 * 30
      Cookie.set('auth_token', data.token, { expires: cookieExpiresInSeconds })
      router.push('/dashboard')
    },
  })

}
export const userRegister = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()
  // eslint-disable-next-line react-hooks/rules-of-hooks
 return  useMutation(fetchRegister,{
    onError: () => {
      enqueueSnackbar("error try again", {
        variant: "error",
      });

    },
    onSuccess: (data) => {
      const cookieExpiresInSeconds = 60 * 60 * 24 * 30
      Cookie.set('auth_token', data.token, { expires: cookieExpiresInSeconds })
      router.push('/dashboard')
    },
  })

}

export const userCreateOrder = () =>{
  const queryClient = useQueryClient();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useMutation(fetchCreateOrder,{
    onError: (erro:any) => {
      enqueueSnackbar(erro, {
        variant: "error",
      });
    },
    onSuccess: (_,data) => {
      queryClient.setQueryData(["Order", undefined], (oldData: any) => {
        if (Array.isArray(oldData)) {
          return [
            ...oldData,
            data,
          ];
        } else {
          // Handle the case where oldData is not an array
          // For example, you could return a new array containing only the new data
          return [data];
        }
       });
      enqueueSnackbar("Task criada com sucesso!", { variant: "success" });
    },
  })
}


