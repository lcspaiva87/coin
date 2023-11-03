import { BrandName } from "@/components/brandName";
import { Input } from "@/components/ui/Input";
import Button from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { userFetch } from "@/hooks/user";
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
  const { loginMutation,isLoading} = userFetch();
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
  async function handleSignIn({ email, password }: FormValues) {
    try {
      await loginMutation.mutateAsync({ email, password });
    } catch (error) {
      setError("email", {
        type: "manual",
        message: "E-mail ou senha incorretos",
      });
    }
  }
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
          <form onSubmit={handleSubmit(handleSignIn)}>
            <h2 className="text-center">
              Sign in to <BrandName />
            </h2>
            <Input
              dataTest="data-email-signin"
              type="email"
              name="email"
              placeholder="Email"
              required
              control={control}
              disabled={isLoading}
            />
            <Input
               dataTest="data-password-signin"
               type="password"
               name="password"
               placeholder="Password"
               className="mt-6"
               required
               control={control}
               disabled={isLoading}
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
              <span className=" md:inline">Don{"'"}t have an account? </span>
              <button className="font-bold hover:underline">
                Sign in to <BrandName />
              </button>
            </div>
          </form>
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
