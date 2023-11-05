"use client";
import { CoinData } from "@/@types/typeCoins";
import FormattedNumber from "@/app/(home)/components/formattedNumber";

import clsx from "clsx";
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
    <div className="flex w-1/2 flex-col overflow-hidden rounded-lg shadow-[0px_8px_16px_rgba(0,0,0,0.1)] md:flex-row">
    <div>
      <span className="mx-2 mt-2 whitespace-nowrap text-small-label text-secondary">
        Daily variation
      </span>
      <div className="mx-2 mt-2 flex items-center gap-4 md:mt-4 md:flex-col md:items-start md:gap-2">
        <div className="flex items-center gap-2">
          <img
            alt={coin[currentIndex]?.name}
            src={coin[currentIndex]?.image}
            className="h-8 w-4 md:h-6 md:w-6"
          />
          <span className="text-small-label md:text-label">
            {coin[currentIndex]?.name}
          </span>
        </div>
        <FormattedNumber
          number={coin[currentIndex]?.price_change_percentage_24h}
          className={clsx('text-label md:text-base', {
            'text-tertiary-700':
              coin[currentIndex]?.price_change_percentage_24h > 0,
            'text-quaternary-700':
              coin[currentIndex]?.price_change_percentage_24h < 0,
          })}
          options={{
            signDisplay: 'always',
            style: 'percent',
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
          }}
        />
      </div>
    </div>
    </div>
  );
};
