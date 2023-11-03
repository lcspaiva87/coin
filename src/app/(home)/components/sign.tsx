import Button from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { userFetch } from "@/hooks/user";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { FormLogin } from "./form/formSignIn";
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
  const { loginMutation, isLoading } = userFetch();
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
  console.log(errors);
  async function onSubmit({ email, password }: FormValues) {
    try {
      await loginMutation.mutateAsync({ email, password });
    } catch (error) {
      alert("email");
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
    </form>
  );
}
