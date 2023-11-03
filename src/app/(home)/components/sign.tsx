import Button from "@/components/ui/button";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
type FormValues = {
  email: string;
  password: string;
};
const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup
    .string()
    .required('Senha obrigatória')
    .min(8, 'A senha deve ter pelo menos 8 caracteres'),
})

export function Sign() {
  const {
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(signInFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })
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
