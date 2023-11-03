import Button from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
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

          <DialogContent className="sm:max-w-[20rem] bg-white border-none items-center flex flex-col">
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
