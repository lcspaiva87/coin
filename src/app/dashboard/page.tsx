import { CoinData } from "@/@types/typeCoins";
import { typeListCoin } from "@/@types/typeListCoin";
import { Footer } from "@/components/ui/footer";
import { useCoinStore } from "@/store/coin";
import axios from "axios";
import { Metadata } from "next";
import { cookies } from "next/headers";
import AsideMenu from "./components/asideMenu";
import CardBalance from "./components/cardBalance";
import CardNFTNews from "./components/cardNFTNews";
import DailyVariationCard from "./components/dailyVariationCard";
import Header from "./components/header";
import CardMyWallet from "./components/myWallet";
export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function Dashboard() {
  const cookieStore = cookies().get("auth_token")?.value;
  const response = await axios.get<CoinData>(
    `${process.env.NEXT_PUBLIC_REST_API_COINS}`,
  );
  const resCoin = await axios.get<typeListCoin[]>(
    `${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}/coin`,
    {
      headers: {
        Authorization: `Bearer ${cookieStore}`,
      },
    },
  );
  const coinList = response.data;
  useCoinStore.setState({ state: { coin: resCoin.data ?? [] } });
  return (
    <main className="bg-secondary-200">
      <Header />

      <div className="flex ">
        <AsideMenu />
        <div className="m-[1rem] lg:m-16 max-sm:m-6 w-full flex flex-col gap-8">
          <div className="flex gap-8 max-sm:gap-4 flex-wrap h-fit">
            <CardBalance coin={coinList} />
            <div className="flex gap-8 max-sm:gap-4 max-xl:w-full justify-center">
              <DailyVariationCard coin={coinList} />
              <CardNFTNews />
            </div>
          </div>
          <CardMyWallet />
        </div>
      </div>

      <Footer />

    </main>
  );
}
