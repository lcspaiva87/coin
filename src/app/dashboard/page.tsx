
import { CoinData } from "@/@types/typeCoins";
import { typeListCoin } from "@/@types/typeListCoin";
import { useCoinStore } from "@/store/coin";
import { InitialSore } from "@/store/coin/initialStore";
import axios from "axios";
import { Metadata } from "next";
import { cookies } from 'next/headers';
import CardBalance from "./components/_CardBalance";
import AsideMenu from "./components/asideMenu";
import CardNFTNews from "./components/cardNFTNews";
import DailyVariationCard from "./components/dailyVariationCard";
import CardMyWallet from "./components/myWallet";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function Dashboard() {

  const cookieStore = cookies().get('auth_token')?.value
  const response = await axios.get<CoinData>(
    `${process.env.NEXT_PUBLIC_REST_API_COINS}`)
  const resCoin = await axios.get<typeListCoin[]>(
    `${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}/coin`,
    {
      headers: {
        Authorization: `Bearer ${cookieStore}`,
      },
    },
  )
  const coinList = response.data
  useCoinStore.setState({ state: { coin: resCoin.data ?? [] } })
  return (
    <main className="bg-secondary-100 flex flex-1">
      <AsideMenu />
      <InitialSore coin={resCoin.data} />
      <div className="m-[1rem] lg:m-16 max-sm:m-6 w-full flex flex-col gap-8">
        <div className="flex gap-8 max-sm:gap-4 flex-wrap h-fit">
          <CardBalance coin={coinList} />
          <div className="flex gap-8 max-sm:gap-4 max-xl:w-full justify-center">
            <DailyVariationCard coin={coinList} />
            <CardNFTNews />
          </div>
        </div>

        <CardMyWallet  />
      </div>
    </main>
  );
}
