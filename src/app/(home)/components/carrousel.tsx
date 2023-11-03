"use client";
import { ListCoinData } from "@/@types/typeCoins";

import clsx from "clsx";
import Marquee from "react-fast-marquee";
import FormattedNumber from "./formattedNumber";

export function Carrousel({
  isLoading,
  coinList,
}: {
  coinList: ListCoinData[];
  isLoading: boolean;
}) {
  return (
    <div className="col-span-2 row-start-2 flex  w-full items-center justify-center border-t border-secondary-200 lg:col-span-1 lg:row-start-auto lg:h-full lg:justify-end lg:border-none ">
      <div className={clsx("mx-2 px-4 py-[5px]")}>
        <div className="ml-auto max-w-[450px] ">
          {isLoading ? (
            <div className=" flex animate-pulse gap-3 pr-[1rem]">
              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  className="h-[0.6rem] w-[3rem] bg-secondary-700  pl-[1rem]"
                />
              ))}
            </div>
          ) : (
            <Marquee>
              {coinList.slice(0, 5).map((item, index) => (
                <div
                  className="flex flex-shrink-0 items-center gap-2 px-3 text-small-label"
                  key={item?.lastId}
                >
                  <span className="text-secondary-800">{item?.symbol}</span>
                  <span
                    className={clsx({
                      "text-tertiary-700": Number(item.priceChange) >= 0,
                      "text-quaternary-500": Number(item.priceChange) < 0,
                    })}
                  >
                    <FormattedNumber
                      number={Number(item.priceChange)}
                      options={{
                        signDisplay: "always",
                        minimumFractionDigits: 3,
                        maximumFractionDigits: 3,
                      }}
                    />
                  </span>
                </div>
              ))}
            </Marquee>
          )}
        </div>
      </div>
    </div>
  );
}
