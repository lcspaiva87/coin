"use client";
import chevron from "@/../public/chevron-prim-300.svg";
import { CoinData } from "@/@types/typeCoins";
import Button from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import FormattedNumber from "./formattedNumber";

export default function TopCryptoTableRow({
  coinList,
  index,
}: {
  coinList: CoinData;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const grayRow = index % 2 ? "bg-secondary-100/50" : "";
  return (
    <tr className={`${grayRow}`}>
      <Collapsible key={coinList.id} open={open} onOpenChange={setOpen}>
        <div className="cryptoTable flex h-14 items-center justify-between px-4 md:h-16">
          <span className="hidden text-sm md:block">
            {(index + 1).toString().padStart(2, "0")}
          </span>
          <div className="flex items-center text-base">
            <Image
              src={coinList?.image}
              alt={coinList?.name}
              className="w-6"
              width={0}
              height={0}
            />
            <span className="ml-2 mr-1">{coinList.name}</span>
            <span className="text-secondary-500">
              {coinList.symbol.toUpperCase()}
            </span>
          </div>
          <span className="hidden text-base text-text md:block">
            {coinList.current_price}
          </span>

          <FormattedNumber
            number={coinList?.price_change_percentage_24h}
            className={clsx(`hidden text-base md:block`, {
              "text-tertiary-700": coinList?.price_change_percentage_24h > 0,
              "text-quaternary-700": coinList?.price_change_percentage_24h < 0,
            })}
            options={{
              signDisplay: "always",
              style: "percent",
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            }}
          />
          <Button
            dataTest="buy-button"
            className="bg-tertiary-700 hover:bg-tertiary-600 focus-visible:ring-primary active:bg-tertiary-800 hidden  md:block"
          >
            Buy
          </Button>

          <CollapsibleTrigger className="md:hidden">
            <button className="mr-1">
              <Image
                src={chevron}
                width={16}
                alt=""
                className={`${open && "rotate-180"} transition-transform`}
              />
            </button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent
          className={`flex flex-col text-secondary-500 md:hidden ${
            open && "border-t border-secondary-200"
          }`}
        >
          <tr className="flex w-full justify-between p-4">
            Price{" "}
            <span className="text-sm text-text">
              {coinList.price_change_percentage_24h}
            </span>
          </tr>
          <tr className="flex w-full justify-between px-4 pb-4">
            Change{" "}
            <FormattedNumber
              number={coinList?.price_change_percentage_24h}
              className={clsx({
                "text-tertiary-700": coinList?.price_change_percentage_24h > 0,
                "text-quaternary-700":
                  coinList?.price_change_percentage_24h < 0,
              })}
              options={{
                signDisplay: "always",
                style: "percent",
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              }}
            />
          </tr>
        </CollapsibleContent>
      </Collapsible>
    </tr>
  );
}
