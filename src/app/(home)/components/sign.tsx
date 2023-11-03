import { BrandName } from "@/components/brandName";
import Button from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FormLogin } from "./form/formSignIn";

export function Sign() {
  return (
    <Dialog>
      <div className="hidden w-full  items-center gap-[1.5rem] md:flex ">
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            dataTest="button-sign-in"
            // onClick={() => setModalModalSignInToOpen(true)}
          >
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

        <Button
          dataTest="button-sign-up"
          // onClick={() => setModalSignUpOpen(true)}
          className="text-label"
        >
          Sign up
        </Button>
      </div>
    </Dialog>
  );
}
