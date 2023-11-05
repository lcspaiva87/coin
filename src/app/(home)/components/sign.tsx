"use client";
import Button from "@/components/ui/button";
import { useState } from "react";
import { ModalSignInTo } from "./modalSign";
import { ModalSignUp } from "./modalSignup";
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
        variant="primary"
        dataTest="button-sign-in"
        onClick={() => setIsOpen2(true)}
      >
        Sign up
      </Button>

      <ModalSignInTo isClose={setIsOpen1} isOpen={isOpen1} isOpenModalSignUp={setIsOpen2} />
      <ModalSignUp  closse={setIsOpen2} open={isOpen2}  />
    </div>
  );
}
