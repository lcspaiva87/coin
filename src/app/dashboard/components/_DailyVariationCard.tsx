"use client";
import { CoinData } from "@/@types/typeCoins";
import FormattedNumber from "@/app/(home)/components/formattedNumber";
import clsx from "clsx";
import Image from "next/image";

import { useEffect, useState } from "react";

export const DailyVariationCard = ({ coin }: { coin: CoinData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex >= coin.length) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }, 4000);
  }, []);
  return (
    <div className="grid grid-cols-2 bg-white sm:h-28 shadow-lg rounded-lg">
      <div className="p-[0.5rem]">
        <span className="mt-2 whitespace-nowrap text-secondary">
          Daily variation
        </span>
        <div className="flex flex-row items-center gap-[0.5rem]">
          <Image
            width={0}
            height={0}
            alt={coin[currentIndex]?.name}
            src={coin[currentIndex]?.image}
            className="h-8 w-4 md:h-6 md:w-6"
          />
          <span className="text-small-label md:text-label">
            {coin[currentIndex]?.symbol}
          </span>
        </div>
        <FormattedNumber
          number={coin[currentIndex]?.price_change_percentage_24h}
          className={clsx("text-label md:text-base", {
            "text-tertiary-700":
              coin[currentIndex]?.price_change_percentage_24h > 0,
            "text-quaternary-700":
              coin[currentIndex]?.price_change_percentage_24h < 0,
          })}
        />
      </div>
      <div className=" max-sm:w-full rounded-e-lg sm:h-28">
        <Image
          src="./graphic-image.svg"
          width={0}
          height={0}
          alt="graphic image"

          className="h-full w-full md:object-cover"
          style={{
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
};

/*  <div className="flex w-1/2 flex-col overflow-hidden rounded-lg h-[7rem] shadow-[0px_8px_16px_rgba(0,0,0,0.1)] md:flex-row">
      <div className="flex ">
        <span className="mx-2 mt-2 whitespace-nowrap text-small-label text-secondary">
          Daily variation
        </span>
        <div className="flex items-center gap-2">
          <img
            alt={coin[currentIndex]?.name}
            src={coin[currentIndex]?.image}
            className="h-8 w-4 md:h-6 md:w-6"
          />
          <span className="text-small-label md:text-label">
            {coin[currentIndex]?.symbol}
          </span>

          <FormattedNumber
            number={coin[currentIndex]?.price_change_percentage_24h}
            className={clsx("text-label md:text-base", {
              "text-tertiary-700":
                coin[currentIndex]?.price_change_percentage_24h > 0,
              "text-quaternary-700":
                coin[currentIndex]?.price_change_percentage_24h < 0,
            })}
            options={{
              signDisplay: "always",
              style: "percent",
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            }}
          />
        </div>
      </div>
      <div className=" flex h-[7rem] w-full flex-col bg-gradient-to-b from-primary-300 to-primary-300/0 md:mt-0">
        <div className="flex-grow ">
          <Sparklines
            data={[
              coin[currentIndex]?.high_24h,
              coin[currentIndex]?.low_24h,
              coin[currentIndex]?.total_volume,
              coin[currentIndex]?.current_price,
            ]}
          >
            <SparklinesLine style={{ strokeWidth: 2 }} color="#ea4989" />
          </Sparklines>
        </div>
      </div>
    </div>
  ); */
