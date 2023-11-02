"use client";
import Button from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import Link from "next/link";
import { useState } from "react";
export function DropdownMenu() {
  const [isOpen, setIsOpenModal] = useState(false);
  const SheetClose = SheetPrimitive.Close;

  return (
    <div className="ml-auto  md:block  ">
      <button
        className="ml-auto md:hidden "
        onClick={() => setIsOpenModal((prev) => !prev)}
        aria-label="Open navigation menu"
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
            // onClick={() => setModalModalSignInToOpen(true)}
          >
            Sign in
          </Button>
          <Button
            dataTest="button-sign-up"
            className="text-label"
            // onClick={() => setModalSignUpOpen(true)}
          >
            Sign up
          </Button>
          <SheetClose>
            <button
              aria-label="Close navigation menu"
              className="mt-[14px] w-max"
            >
              <Icons.CircledArrowLeft className="h-6 w-6 rotate-180 transform" />
            </button>
          </SheetClose>
        </div>
      </button>
      <div className="hidden w-full  items-center gap-[1.5rem] md:flex ">
        <Button
          variant="ghost"
          dataTest="button-sign-in"
          // onClick={() => setModalModalSignInToOpen(true)}
        >
          Sign in
        </Button>
        <Button
          dataTest="button-sign-up"
          // onClick={() => setModalSignUpOpen(true)}
          className="text-label"
        >
          Sign up
        </Button>
      </div>
    </div>
  );
}
