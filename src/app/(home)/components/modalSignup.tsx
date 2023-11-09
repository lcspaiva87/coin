"use client";

import { BrandName } from "@/components/ui/brandName";
import { Modal } from "@/components/ui/moda";
import FormSignUp from "./form/formSignup";

export  default function ModalSignUp({
  isOpen,
  isClose,
  isOpenModalSignIn,
}: {
  isOpen: boolean;
  isClose: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenModalSignIn: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Modal isOpen={isOpen} isClose={isClose}>
      <h2 className="text-center">
        Sign in to <BrandName />
      </h2>
      <FormSignUp />
      <div className="mt-4 text-small-label flex  items-center justify-center">
        <span className="hidden text-xs  md:inline">Already have and account? </span>
        <button className="font-bold  text-xs hover:underline"
          onClick={() => {
            isOpenModalSignIn(true);
            isClose(false);
          }}

        >
          Sign in to <BrandName />
        </button>
      </div>
    </Modal>
  );
}
