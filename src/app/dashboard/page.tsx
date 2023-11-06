import { CoinData } from "@/@types/typeCoins";
import { typeListCoin } from "@/@types/typeListCoin";
import axios from "axios";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { AsideMenu } from "./components/AsideMenu";
import { CardBalance } from "./components/_CardBalance";
import { CardMyWallet } from "./components/_CardMyWallet";
import { DailyVariationCard } from "./components/_DailyVariationCard";
import { CardNFTNews } from "./components/cardNFTNews";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function Dashboard() {
  const cookieStore = cookies().get("auth_token")?.value;
  const response = await axios.get<CoinData>(
    `${process.env.NEXT_PUBLIC_REST_API_COINS}`,
  );
  const dateUser = await axios.get<typeListCoin>(
    `${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}/coin`,
    {
      headers: {
        Authorization: `Bearer ${cookieStore}`,
      },
    },
  );
  const coinList = response.data;

  return (
    <main className="bg-secondary-100 flex flex-1">
      <AsideMenu />
      <div className="m-[1rem] lg:m-16 max-sm:m-6 w-full flex flex-col gap-8">
        <div className="flex gap-8 max-sm:gap-4 flex-wrap h-fit">
          <CardBalance coin={coinList} />
          <div className="flex gap-8 max-sm:gap-4 max-xl:w-full justify-center">
            <DailyVariationCard coin={coinList} />
            <CardNFTNews />
          </div>
        </div>

        <CardMyWallet data={dateUser.data} />
      </div>
    </main>
  );
}
/*<div className="flex h-full flex-col">
<main className="relative flex-grow pb-10 pt-6 lg:bg-[#f9f9f9]">
  <div className="container flex flex-col gap-4 md:gap-6 lg:flex-row lg:gap-8">
    <CardBalance coin={coinList} />
    <div className="flex w-full gap-4 md:gap-8">
      <DailyVariationCard coin={coinList} />
      <CardNFTNews />
    </div>
  </div>
  <hr className="container mt-6 text-secondary-300 md:hidden" />
  <CardMyWallet />
</main>
</div> */
