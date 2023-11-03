import { BrandName } from "@/components/brandName";
import { Input } from "@/components/ui/Input";
import Button from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as yup from "yup";
type FormValues = {
  email: string;
  password: string;
};
const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(8, "A senha deve ter pelo menos 8 caracteres"),
});

export function Sign() {
  const {
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(signInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
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
        <DialogContent className="sm:max-w-[425px] bg-white border-none items-center flex flex-col">
          <h2 className="text-center">
            Sign in to <BrandName />
          </h2>
          <Input
            type="username"
            name="name"
            placeholder="Name"
            required
            dataTest="input-name"
            control={control}
          />
          <Input
            type="username"
            name="name"
            placeholder="Name"
            required
            dataTest="input-name"
            control={control}
          />
          <Link
            href="#"
            className="ml-auto mt-[9px] block w-max text-small-label text-secondary hover:underline"
          >
            Forgot password?
          </Link>
          <Button
            dataTest="data-button-signin"
            className="mt-4 w-full py-3"
            type="submit"
          >
            Sign in
          </Button>
          <div className="mt-4 text-small-label">
            <span className=" md:inline">
              Don{"'"}t have an account?{" "}
            </span>
            <button className="font-bold hover:underline">
              Sign in to <BrandName />
            </button>
          </div>
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
