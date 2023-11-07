"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import SlideOvers from "./SlideOver";

export default function Header() {

  const DropdownMenu = dynamic(() => import("./dropdownMenu"), {
    ssr: false,
  });

  return (
    <>
      <header
        className="z-10 shadow-[0px_4px_8px_rgba(77,77,77,0.1)] grid grid-cols-3 grid-rows-1 py-[1rem] lg:flex lg:items-center lg:justify-between h-[4rem] px-[2.5rem]"

      >
        <SlideOvers />
        <Image
          src="./logo.svg"
          className="place-self-center"
          alt="Logo coin-synch"
          width={124}
          height={21}
        />
        <DropdownMenu className="place-self-end" />
      </header>
    </>
  );
}
