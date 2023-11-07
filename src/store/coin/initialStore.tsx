'use client'
import { typeListCoin } from '@/@types/typeListCoin'
import { useCoinStore } from '@/store/coin'
import { useRef } from 'react'

type InitializeStoreProps = {
  coin: typeListCoin[]
}
export function InitialSore({ coin }: InitializeStoreProps) {
  const initializer = useRef(false)
  if (!initializer.current) {
    useCoinStore.setState({ state: { coin } })
    initializer.current = true
  }
  return null
}
