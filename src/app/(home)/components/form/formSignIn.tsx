"use client";
import { Input } from "@/components/ui/Input";
import Button from "@/components/ui/button";
import { LoadingSpinner } from "@/components/ui/loadingSpinner";
import { userFetch } from "@/hooks/user";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { enqueueSnackbar } from "notistack";

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

export function FormLogin() {
  const { mutate: loginMutation, isLoading: loading } = userFetch();
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

  async function onSubmit({ email, password }: FormValues) {
    loginMutation(
      { email, password },
      {
        onError: (error: any) => {
          Object.keys(error?.response?.data).forEach((field: any) => {
            enqueueSnackbar(error.response.data.message);
          });
        },
      },
    );
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} >

      <Input
        dataTest="data-email-signin"
        type="email"
        name="email"
        placeholder="Email"
        required
        control={control}
        disabled={loading}
      />
      <Input
        dataTest="data-password-signin"
        type="password"
        name="password"
        placeholder="Password"
        className="mt-6"
        required
        control={control}
        disabled={loading}
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
        disabled={loading}
      >
        {loading ? <LoadingSpinner className="mx-auto" /> : " Sign in"}
      </Button>

    </form>
  );
}
