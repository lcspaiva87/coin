import { CoinData } from "@/@types/typeCoins";
import { typeListCoin } from "@/@types/typeListCoin";
import { Footer } from "@/components/ui/footer";
import axios from "axios";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { Sidebar } from "./components/Sidebar";
import { CardBalance } from "./components/_CardBalance";
import { CardMyWallet } from "./components/_CardMyWallet";
import { DailyVariationCard } from "./components/_DailyVariationCard";
import { CardNFTNews } from "./components/cardNFTNews";
import { Header } from "./components/header";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function Dashboard() {
  const cookieStore = cookies().get("auth_token")?.value;
  const response = await axios.get<CoinData>(
    `${process.env.NEXT_PUBLIC_REST_API_COINS}`,
  );
  console.log(cookieStore);
  const resCoin = await axios.get<typeListCoin[]>(
    `${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}/coin`,
    {
      headers: {
        Authorization: `Bearer ${cookieStore}`,
      },
    },
  );
  const coinList = response.data;

  return (
    <>
      <Header />
      <div className="flex h-full flex-col">
        <main className=" relative flex-grow pb-10 pt-6 lg:bg-[#f9f9f9]">
          <div className="container flex flex-col gap-4 md:gap-6 lg:flex-row lg:gap-8">
            <CardBalance coin={coinList} />
            <div className="flex w-full gap-4 md:gap-8">
              <DailyVariationCard coin={coinList} />
              <CardNFTNews />
            </div>
          </div>

          <CardMyWallet />
          <hr className="container mt-6 text-secondary-300 md:hidden" />
          <Sidebar />
        </main>

        <Footer />
      </div>
    </>
  );
}
