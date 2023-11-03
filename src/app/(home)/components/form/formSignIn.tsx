"use client";
import { BrandName } from "@/components/brandName";
import { Input } from "@/components/ui/Input";
import Button from "@/components/ui/button";
import { LoadingSpinner } from "@/components/ui/loadingSpinner";
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

export function FormLogin() {
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
   
      await loginMutation.mutateAsync({ email, password });
    
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
        className="mt-4 w-full py-3"
        type="submit"
  
        dataTest={""}
      >
        {isLoading ? <LoadingSpinner className="mx-auto" /> : " Sign in"}
      </Button>
      <div className="mt-4 text-small-label">
        <span className=" md:inline">Don{"'"}t have an account? </span>
        <button className="font-bold hover:underline">
          Sign in to <BrandName />
        </button>
      </div>
    </form>
  );
}
