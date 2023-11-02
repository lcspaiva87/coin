'use client'

import { fetchCoin } from '@/data/fetchCoin'

import { useQuery } from 'react-query'

export const useCoin = () => {
  const {
    data: listCoin,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['listCoin'],
    queryFn: () => fetchCoin(),
  })
  return {
    listCoin: listCoin ?? [],
    isLoading,
    isError,
  }
}
