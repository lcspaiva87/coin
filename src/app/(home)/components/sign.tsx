import Button from "@/components/ui/button";

export function Sign() {
  return (
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
  );
}
