"use client";
import { CoinData } from "@/@types/typeCoins";
import FormattedNumber from "@/app/(home)/components/formattedNumber";

import { Icons } from "@/components/ui/icons";
import { useEffect, useState } from "react";

export default function CardBalance({ coin }: { coin: CoinData }) {
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
    <div className="flex shadow-lg rounded-lg h-28 max-sm:h-12 flex-1">
      <div className="px-6 max-sm:px-4 max-sm:py-2 pr-12 max-sm:pr-12 flex items-center gap-4 bg-white rounded-s-lg flex-1">
        <Icons.Balance className="w-5 md:w-8 2xl:w-10" />
        <div className="flex flex-col min-[640px]:whitespace-nowrap">
          <h4 className="font-normal text-2xl max-sm:text-sm mr-10 max-sm:mr-6">
            Balance{" "}
            <span className="max-sm:text-secondary-500 max-sm:text-xs">
              in US$
            </span>
          </h4>
          <p className="text-secondary-500 max-sm:hidden">(approximately)</p>
        </div>
      </div>
      <div className="px-14 max-sm:px-6 py-9 max-sm:py-3 bg-primary-100 rounded-e-lg text-center flex items-center justify-center font-bold text-3xl max-sm:text-base flex-1">
        <FormattedNumber
          number={coin[currentIndex]?.current_price}
          options={{
            signDisplay: "never",
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
          }}
        />
      </div>
    </div>
  );
}
// <section className="flex w-full justify-between overflow-hidden rounded-lg bg-white shadow-lg h-[7rem]">
//   <div className="flex items-center gap-2 px-4 py-2 2xl:gap-4 2xl:p-6">
//     <div className="rounded-full bg-primary-100 p-2">
//       <Icons.Balance className="w-5 md:w-8 2xl:w-10" />
//     </div>
//     <div
//       className="flex flex-col leading-tight md:w-[10rem] md:flex-row md:flex-wrap md:items-center md:text-xl
//     lg:text-lg xl:text-xl"
//     >
//       <span>Balance&nbsp;</span>
//       <span className="text-xs text-secondary-500 md:text-xl md:text-text">
//         in US$
//       </span>
//       <span className="hidden text-sm text-secondary-500 md:block">
//         (approximately)
//       </span>
//     </div>
//   </div>

//   <div
//     className="flex items-center justify-center bg-primary-100 px-6 py-3 text-base font-bold md:basis-2/5 md:text-2xl
//     lg:px-3 lg:text-xl xl:px-6 2xl:basis-1/2 2xl:text-3xl"
//   >
//     {" "}
//     <FormattedNumber
//       number={coin[currentIndex]?.current_price}
//       options={{
//         signDisplay: "never",
//         style: "currency",
//         currency: "USD",
//         maximumFractionDigits: 2,
//         minimumFractionDigits: 2,
//       }}
//     />
//   </div>
// </section>
