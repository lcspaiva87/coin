"use client";
import { Icons } from "@/components/ui/icons";
import { useState } from "react";
import { DropdownMenu } from "./dropdownMenu";

export function Header() {
  const [isSlideOverOpen, setIsSlideOverOpen] = useState(false);
  return (
    <header className="z-10 shadow-[0px_4px_8px_rgba(77,77,77,0.1)]  grid grid-cols-3 grid-rows-1 py-4 px-[2.5rem] lg:flex lg:items-center lg:justify-between h-[4rem]">
      <button
        className="place-self-start lg:hidden"
        onClick={() => setIsSlideOverOpen((prev) => !prev)}
        aria-label="Open navigation menu"
      >
        <Icons.MenuHamburger />
      </button>
      <div className="flex items-center justify-center col-span-1">
        <Icons.Logo />
      </div>
      <DropdownMenu className="place-self-end" />
    </header>
  );
}
