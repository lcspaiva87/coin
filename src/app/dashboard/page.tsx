
import { Metadata } from "next";
import AsideMenu from "./components/AsideMenu";
import CardNFTNews from "./components/cardNFTNews";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function Dashboard() {


  return (
    <main className="bg-secondary-100 flex flex-1">

      <AsideMenu />
      <div className="m-[1rem] lg:m-16 max-sm:m-6 w-full flex flex-col gap-8">
        <div className="flex gap-8 max-sm:gap-4 flex-wrap h-fit">
          {/* <CardBalance coin={coinList} /> */}
          <div className="flex gap-8 max-sm:gap-4 max-xl:w-full justify-center">
            {/* <DailyVariationCard coin={coinList} /> */}
            <CardNFTNews />
          </div>
        </div>

        {/* <CardMyWallet data={dateUser.data} /> */}
      </div>
    </main>
  );
}
