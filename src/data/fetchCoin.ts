import { CoinData, ListCoinData } from "@/@types/typeCoins"
import axios from "axios"

export async function fetchCoin() {
  const response = await axios.get<ListCoinData[]>(
    'https://api.binance.com/api/v3/ticker/24hr',
  )

  const List = response.data
  return List
}

export async function listCoin(){
  const response = await axios.get<CoinData>(
    `${process.env.NEXT_PUBLIC_REST_API_COINS}`)
    return response.data
}
