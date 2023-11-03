"use client";
import { useCoin } from "@/hooks/useCoin";

import { DropdownMenu } from "@/app/(home)/components/dropdownMenu";

import { Sign } from "@/app/(home)/components/sign";
import Image from "next/image";
import Link from "next/link";
import { CoinCarrousel } from "./carrousel";
import { Icons } from "./icons";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";

export function Header() {
  const { isLoading, listCoin: data } = useCoin();
  return (
    <header
      className="text-sm xl:max-w-[1240px] 2xl:max-w-[1400px] lg: container grid w-full grid-cols-[auto] grid-rows-[1fr_auto]   py-2 shadow-md
  md:px-[7rem] lg:grid-cols-[auto_1fr_auto] lg:grid-rows-1 lg:py-3 lg:shadow-none"
    >
      <div className="flex w-full items-center ">
        <Link href="/" className="md:mr-10">
          <Image
            src="/logo.svg"
            alt="Logo CoincSynch"
            width={124}
            height={24}
          />
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="#about-us" className="text-label hover:underline">
            Lorem ipsum
          </Link>
          <Link href="#top-cryptos" className="text-label hover:underline">
            Top cryptos
          </Link>
        </nav>
      </div>
      <div
        className="col-span-2 row-start-2 flex h-6 w-full items-center justify-center border-t border-secondary-200
        lg:col-span-1 lg:row-start-auto lg:h-full lg:justify-end lg:border-none  mt-2 "
      >
        <CoinCarrousel
          className="ml-auto max-w-[450px] "
          coinList={data}
          isLoading={isLoading}
        />
      </div>
      <div className="flex w-full items-center">
        <div className="ml-auto  md:block  lg:hidden ">
          <Sheet>
            <SheetTrigger>
              <button
                className="ml-auto md:hidden "
                aria-label="Open navigation menu"
              >
                <Icons.MenuHamburger />
              </button>
            </SheetTrigger>
            <SheetContent className="border-none bg-white">
              <DropdownMenu />
            </SheetContent>
          </Sheet>
        </div>
        <Sign />
      </div>
    </header>
  );
}
