import { BrandName } from "@/components/brandName";
import Button from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FormLogin } from "./form/formSignIn";
import { FormSignUp } from "./form/formSignup";

export function Sign() {
  return (
    <>
      <div className="hidden w-full  items-center gap-[1.5rem] md:flex ">
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
      </div>
    </>
  );
}
