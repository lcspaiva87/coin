"use client";
import Button from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import Link from "next/link";
import { useRef, useState } from "react";
import { MenuMobile } from "./SlideOver";
import { ModalSignInTo } from "./modalSign";
import { ModalSignUp } from "./modalSignup";
export function DropdownMenu() {
  const headerRef = useRef<HTMLElement>(null);
  const carrouselRef = useRef<HTMLDivElement>(null);
  const [isSlideOverOpen, setIsSlideOverOpen] = useState(false);
  const [isOpenSignInTo, setIsOpenSignInTo] = useState(false);
  const [isOpenSignUp, setIsOpenSignUp] = useState(false);
  return (
    <div className="ml-auto  md:block  ">
      <button
        className="ml-auto md:hidden "
        onClick={() => setIsSlideOverOpen((prev) => !prev)}
        aria-label="Open navigation menu"
      >
        <Icons.MenuHamburger />
        <MenuMobile
          isOpen={isSlideOverOpen}
          onClose={() => setIsSlideOverOpen(!false)}
          side="right"
          overlayClassName="top-[--top-distance]"
          overlayStyle={{
            "--top-distance": `${
              (headerRef.current?.clientHeight ?? 0) +
              (carrouselRef.current?.clientHeight ?? 0)
            }px`,
          }}
          dialogClassName="mt-[--header-height] border-t border-secondary-300"
          dialogStyle={{
            "--header-height": `${headerRef.current?.clientHeight ?? 0}px`,
          }}
        >
          <div className="flex flex-col items-center gap-8 px-[62px]">
            <Link className="text-label hover:underline" href="#about-us">
              About us
            </Link>
            <Link href="#top-cryptos" className="text-label hover:underline">
              Top Cryptos
            </Link>
            <Button
              dataTest="button-sign-in"
              variant="ghost"
              onClick={() => setIsOpenSignInTo(true)}
            >
              Sign in
            </Button>
            <Button
              dataTest="button-sign-up"
              className="text-label"
              onClick={() => setIsOpenSignUp(true)}
            >
              Sign up
            </Button>
            <button
              aria-label="Close navigation menu"
              className="mt-[14px] w-max"
              onClick={() => setIsSlideOverOpen(false)}
            >
              <Icons.CircledArrowLeft className="h-6 w-6 rotate-180 transform" />
            </button>
          </div>
        </MenuMobile>
      </button>
      <ModalSignInTo isClose={setIsOpenSignInTo} isOpen={isOpenSignInTo} isOpenModalSignUp={setIsOpenSignUp} />
      <ModalSignUp  isClose={setIsOpenSignUp} isOpen={isOpenSignUp} isOpenModalSignIn={setIsOpenSignInTo}  />

    </div>
  );
}
