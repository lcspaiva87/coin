'use client'
import { fetchLogin, fetchRegister } from '@/data/user';
import Cookie from 'js-cookie';
import { useRouter } from 'next/navigation';
import { enqueueSnackbar } from "notistack";
import { useMutation } from 'react-query';

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

    },
  })

}
