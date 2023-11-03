'use client'
import { fetchCoin } from '@/data/fetchCoin';
import { fetchLogin } from '@/data/use';
import Cookie from 'js-cookie';
import { useRouter } from 'next/navigation';
import { enqueueSnackbar } from "notistack";
import { useMutation, useQuery, useQueryClient } from 'react-query';

export const userFetch = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const queryClient = useQueryClient();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const loginMutation = useMutation(fetchLogin,{
    onError: () => {
      enqueueSnackbar("Erro ao salvar Task, tente novamente", {
        variant: "error",
      });
    },
    onSuccess: (data) => {
      const cookieExpiresInSeconds = 60 * 60 * 24 * 30
      Cookie.set('auth_token', data.token, { expires: cookieExpiresInSeconds })
      router.push('/dashboard')
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
