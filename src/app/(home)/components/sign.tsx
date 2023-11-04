"use client";
import Button from "@/components/ui/button";
import { Close, Title } from "@radix-ui/react-dialog";
import { useState } from "react";
import { ModalSignInTo } from "./modalSign";
import { ModalSignUp } from "./modalSignup";
const ModalTitle = Title;

const ModalClose = Close;
export function Sign() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  return (
    <div className="w-full hidden items-center gap-[1.5rem] md:flex ">
      <Button
        variant="ghost"
        dataTest="button-sign-in"
        onClick={() => setIsOpen1(true)}
      >
        Sign in
      </Button>
      <Button
        variant="ghost"
        dataTest="button-sign-in"
        onClick={() => setIsOpen2(true)}
      >
        Sign inaa
      </Button>

      <ModalSignInTo closse={setIsOpen1} open={isOpen1} />
      <ModalSignUp  closse={setIsOpen2} open={isOpen2}  />
    </div>
  );
}
{
  /* <ModalNU showModal={isOpen2} setShowModal={setIsOpen2}>
<button
    onClick={() => setIsOpen1(false)}
    className="absolute right-4 top-4"
  >
    <Icons.XMark className="transition-colors  hover:fill-secondary-100 active:fill-secondary-100" />
  </button>

  <h2 className="text-center">
    Sign in to <BrandName />
  </h2>

  <div className="mt-4 text-small-label">
    <span className="hidden md:inline">Don{"'"}t have an account? </span>
    <button
      className="font-bold hover:underline"
      onClick={() => {
        setIsOpen2(true), setIsOpen1(false);
      }}
    >
      Sign up to <BrandName />
    </button>
  </div>
</ModalNU> */
}
