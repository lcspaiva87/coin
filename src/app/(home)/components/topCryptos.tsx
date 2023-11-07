import { CoinData } from "@/@types/typeCoins"
import axios from "axios"
import TopCryptoTable from "./topCryptoTable"
export  default async function TopCryptos  ()  {
  const response = await axios.get<CoinData>(
    'https://raw.githubusercontent.com/aayushah711/coingecko/master/popular_coins.json',
    {
      timeout: 50000,
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
  const coinList: CoinData = response.data
  return (
    <section
    id="top-cryptos"
    className="container flex w-full flex-col items-center px-6 py-14 md:py-20 lg:py-32"
  >
    <h2 className="mb-4 text-xl font-bold md:text-2xl lg:mb-12 lg:text-3xl">
      Top Cryptos
    </h2>
    <TopCryptoTable coinList={coinList} />
  </section>

  )
}
