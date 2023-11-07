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

export const userTete = () => {
 return  useMutation(fetchLogin,{
    onError: () => {
      enqueueSnackbar("error try again", {
        variant: "error",
      });

    },
    onSuccess: (data) => {
      console.log(data)
    },
  })

}
export const userCreateOrder = () =>{
  const queryClient = useQueryClient();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useMutation(fetchCreateOrder,{
    onError: () => {
      enqueueSnackbar("error creating order", {
        variant: "error",
      });
    },
    onSuccess: (_,data) => {

      enqueueSnackbar("Task criada com sucesso!", { variant: "success" });
    },
  })
}
