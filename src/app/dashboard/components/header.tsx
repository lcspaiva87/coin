"use client";
import { Icons } from "@/components/ui/icons";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import SlideOver from "./SlideOver";
import { DropdownMenu } from "./dropdownMenu";

export function Header() {
  const [isSlideOverOpen, setIsSlideOverOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  return (
    <>
      <header
        className="z-10 shadow-[0px_4px_8px_rgba(77,77,77,0.1)] grid grid-cols-3 grid-rows-1 py-[1rem] lg:flex lg:items-center lg:justify-between h-[4rem] px-[2.5rem]"
        ref={headerRef}
      >
        <button
          className="place-self-start lg:hidden"
          onClick={() => setIsSlideOverOpen((prev) => !prev)}
          aria-label="Open navigation menu"
        >
          <Icons.MenuHamburger />
        </button>
        <Image
          src="./logo.svg"
          className="place-self-center"
          alt="Logo coin-synch"
          width={124}
          height={21}
        />
        <DropdownMenu className="place-self-end" />
      </header>

      <SlideOver
        isOpen={isSlideOverOpen}
        onClose={() => setIsSlideOverOpen(false)}
        side="left"
        hiddenBreakpoint="lg"
        overlayClassName="top-[--top-distance]"
        overlayStyle={{
          "--top-distance": `${headerRef.current?.clientHeight ?? 0}px`,
        }}
        dialogClassName="mt-[--header-height] border-t border-secondary-300"
        dialogStyle={{
          "--header-height": `${headerRef.current?.clientHeight ?? 0}px`,
        }}
      >

      </SlideOver>
    </>
  );
}
const SlideOverLink = ({
  href,
  icon,
  children,
}: {
  href: string;
  icon: (props: { className: string }) => React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-4 text-label transition-colors hover:text-primary hover:underline"
    >
      {icon({ className: "h-6 w-6" })}
      {children}
    </Link>
  );
};
