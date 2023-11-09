
import DropdownMenu from "@/app/(home)/components/dropdownMenu";

import Carrousel from "@/app/(home)/components/carrousel";
import Sign from "@/app/(home)/components/sign";
import { listCoin } from "@/data/fetchCoin";
import Image from "next/image";
import Link from "next/link";

export async function Header() {
  const response = await listCoin()
  return (
    <header
      className="text-sm xl:max-w-[1240px] 2xl:max-w-[1400px] lg:container grid w-full grid-cols-[auto] grid-rows-[1fr_auto]   py-2 shadow-md
  md:px-[6rem] lg:grid-cols-[auto_1fr_auto] lg:grid-rows-1 lg:py-3 lg:shadow-none"
    >
      <div className="flex w-full items-center pl-3  lg:pl-0">
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
      <Carrousel coinList={response}  />
      <div className="flex w-full items-center pr-3 lg:pr-0">
        <div className="ml-auto  md:block  lg:hidden ">
          <DropdownMenu />
        </div>
        <Sign />
      </div>
    </header>
  );
}
