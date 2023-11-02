"use client";

import { CoinData } from "@/@types/typeCoins";
import Button from "@/components/ui/button";
import { useState } from "react";
import TopCryptoTableRow from "./TopCryptoTableRow";

export default function TopCryptoTable({ coinList }: { coinList: CoinData }) {
  const [viewMore, setViewMore] = useState(false);
  
  return (
    <div className="flex w-full flex-col items-center overflow-x-hidden">
       <table className="flex min-w-full flex-col text-xs">
        <thead className="cryptoTable w-full px-4 pb-2 text-secondary-500 ">
          <span className="hidden md:block">#</span>
          <span>Crypto</span>
          <span className="hidden md:block">Price</span>
          <span>Change</span>
          <span className="hidden md:block">Trade</span>
        </thead>

        <tbody className="flex flex-col">
          {coinList.length > 0 ? (
            coinList.slice(0, viewMore ? 10 : 4).map((coin:any, index:number) => {
              return <TopCryptoTableRow key={index} coinList={coin} index={index} />
            })
          ) : (
            <tr className="flex w-full justify-center text-base">
              No cryptos found.
            </tr>
          )}
        </tbody>
      </table>
      <Button
        dataTest="view-more-button"
        variant="ghost"
        className="mx-auto mt-4 block text-primary"
        onClick={() => setViewMore((prev) => !prev)}
      >
        {viewMore ? "View less -" : "View more +"}
      </Button>
    </div>
  );
}
