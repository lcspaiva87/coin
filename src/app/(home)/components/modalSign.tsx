"use client";

import { BrandName } from "@/components/ui/brandName";
import { Modal } from "@/components/ui/moda";
import { FormLogin } from "./form/formSignIn";

export function ModalSignInTo({
  isOpen,
  isClose,
  isOpenModalSignUp,
}: {
  isOpen: boolean;
  isClose: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenModalSignUp: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Modal isOpen={isOpen} isClose={isClose}>
      <h2 className="text-center">
        Sign in to <BrandName />
      </h2>
      <FormLogin />
      <div className="mt-4 text-small-label">
        <span className="hidden md:inline">Don{"'"}t have an account? </span>
        <button
          onClick={() => {
            isOpenModalSignUp(true);
            isClose(false);
          }}
          className="font-bold hover:underline"
        >
          Sign up to <BrandName />
        </button>
      </div>
    </Modal>
  );
}
