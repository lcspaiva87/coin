import { ListCoinData } from "@/@types/typeCoins"
import axios from "axios"

export async function fetchCoin() {
  const response = await axios.get<ListCoinData[]>(
    'https://api.binance.com/api/v3/ticker/24hr',
  )

  const List = response.data
  return List
}

