"use client";
import { CoinData } from "@/@types/typeCoins";
import FormattedNumber from "@/app/(home)/components/formattedNumber";
import clsx from "clsx";
import Image from "next/image";

import { useEffect, useState } from "react";

export default function DailyVariationCard  ({ coin }: { coin: CoinData }) {
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
    <div className="flex flex-wrap shadow-lg rounded-lg w-1/2 max-sm:min-h-36 bg-white sm:h-28">
      <div className="flex flex-col w-1/3 max-sm:w-full p-2 max-sm:h-fit">
        <p className="text-secondary-500 text-xs whitespace-nowrap">
          Daily Variation
        </p>
        <div className="flex flex-col max-sm:flex-row max-sm:items-center max-sm:gap-4 max-sm:text-center">
          <div className="flex gap-2 text-center items-center max-sm:mt-2 mb-2">
            <Image
              width={0}
              height={0}
              alt={coin[currentIndex]?.name}
              src={coin[currentIndex]?.image}
              className="h-4  w-4 md:h-4 md:w-4"
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
      </div>

      <div className="w-2/3 max-sm:w-full rounded-e-lg sm:h-28">
        <Image
          width={0}
          height={0}
          src="./graphic-image.svg"
          alt=""
          className="h-full w-full md:object-cover"
        />
      </div>
    </div>
  );
};

