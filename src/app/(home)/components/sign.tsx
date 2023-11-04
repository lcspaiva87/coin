"use client";
import { BrandName } from "@/components/brandName";
import Button from "@/components/ui/button";
import {
  Close,
  Content,
  Overlay,
  Portal,
  Root,
  Title,
  Trigger,
} from "@radix-ui/react-dialog";
import { useState } from "react";
import { FormLogin } from "./form/formSignIn";
import { FormSignUp } from "./form/formSignup";
const ModalTitle = Title;

const ModalClose = Close;
export function Sign() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  return (
    <div className="hidden w-full  items-center gap-[1.5rem] md:flex ">
      <Modal isOpen={isOpen1} onOpenChange={setIsOpen1}>
        <ModalTrigger>
          <Button variant="ghost" dataTest="button-sign-in">
            Sign in
          </Button>
        </ModalTrigger>
        <ModalContent className="bg-white rounded-lg  flex flex-col lg:w-[20rem] w-100 md:w-100">
          <ModalTitle asChild>
            <span className="text-center">
              Sign in to <BrandName />
            </span>
          </ModalTitle>
          <br />
          <FormLogin />

          <Modal isOpen={isOpen2} onOpenChange={setIsOpen2} >
            <ModalTrigger className=" bg-blue-400  p-2 rounded-sm">
              <div className="mt-4 text-small-label text-center">
                <span className=" md:inline">Don{"'"}t have an account? </span>
                <button className="font-bold hover:underline">
                  Sign in to <BrandName />
                </button>
              </div>
            </ModalTrigger>

            <ModalContent className="bg-white rounded-lg  flex flex-col lg:w-[20rem] w-[20rem] md:w-100">
              <ModalTitle asChild>
                <span className="text-center">
                  Sign in to <BrandName />
                </span>
              </ModalTitle>
              <FormSignUp />
              <br />
            </ModalContent>
          </Modal>
        </ModalContent>
      </Modal>

      <br />
    </div>
  );
}
export const Modal = ({ isOpen = false, children, onOpenChange, disabled }) => (
  <Root open={isOpen} onOpenChange={disabled ? undefined : onOpenChange}>
    {children}
  </Root>
);

export const ModalTrigger = Trigger;

export const ModalContent = (props) => {
  return (
    <Portal>
      <Overlay className="fixed inset-0 overflow-y-auto bg-secondary-900 opacity-25" />
      <Content
        {...props}
        className={
          "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-y-auto max-h-screen max-w-full w-max p-6 " +
          props.className
        }
      />
    </Portal>
  );
};

{
  /* <div className="hidden w-full  items-center gap-[1.5rem] md:flex ">
<Dialog>
  <DialogTrigger asChild>
    <Button variant="ghost" dataTest="button-sign-in">
      Sign in
    </Button>
  </DialogTrigger>

  <DialogContent className=" bg-white border-none flex flex-col lg:w-[20rem] w-100 md:w-100">
    <DialogHeader>
      <span className="text-center">
        Sign in to <BrandName />
      </span>
    </DialogHeader>
    <FormLogin />
  </DialogContent>
</Dialog>
<Dialog>
  <DialogTrigger asChild>
    <Button dataTest="button-sign-up" className="text-label">
      Sign up
    </Button>
  </DialogTrigger>
  <DialogContent className=" bg-white border-none flex flex-col lg:w-[20rem] w-100 md:w-100">
    <DialogHeader>
      <span className="text-center">
        Sign in to <BrandName />
      </span>
    </DialogHeader>
    <FormSignUp />
  </DialogContent>
</Dialog>
</div> */
}
