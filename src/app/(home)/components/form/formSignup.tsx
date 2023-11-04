'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'


import { Input } from '@/components/ui/Input'
import Button from '@/components/ui/button'
import { userRegister } from '@/hooks/user'
import { CheckboxField } from './CheckboxField'

type FormValues = {
  name: string
  email: string
  password: string
  terms: boolean
  password_confirmation?: string
}

export function SignUpForm() {
  const { mutate, isLoading: loading } = userRegister()
  const CreateUserFormSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    password: yup.string().required(),
    password_confirmation: yup
      .string()
      .label('confirm password')
      .required()
      .oneOf([yup.ref('password'), ''], 'Passwords must match'),
    terms: yup.bool().oneOf([true], 'Field must be checked').required(),
  })
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver<FormValues>(CreateUserFormSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      terms: false,
    },
  })
  async function onSubmit({ email, name, password, terms }: FormValues) {
    mutate({ email, name, password, terms })
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" mt-6 flex flex-col gap-6"
    >
      <Input
        type="username"
        name="name"
        placeholder="Name"
        required
        dataTest="input-name"
        control={control}
        disabled={loading}
      />
      {errors.name && (
        <span className="text-sm mt-1 text-quaternary-600">
          {errors.name.message}
        </span>
      )}
      <Input
        dataTest="input-email-create-user"
        type="email"
        name="email"
        placeholder="email"
        required
        control={control}
        disabled={loading}
      />
      {errors.email && (
        <span className="text-sm mt-1 text-quaternary-600">
          {errors.email.message}
        </span>
      )}
      <Input
        dataTest="input-password"
        type="password"
        name="password"
        placeholder="password"
        required
        control={control}
        disabled={loading}
      />
      {errors.password && (
        <span className="text-sm mt-1 text-quaternary-600">
          {errors.password.message}
        </span>
      )}
      <Input
        dataTest="input-password-confirmation"
        type="password"
        name="password_confirmation"
        placeholder="Confirm password"
        required
        control={control}
        disabled={loading}
      />
      {errors.password_confirmation && (
        <span className="text-sm mt-1 text-quaternary-600">
          {errors.password_confirmation.message}
        </span>
      )}
      <CheckboxField
        name="terms"
        required
        control={control}
        dataTest="input-terms"
      />
      {errors.terms && (
        <span className="text-sm mt-1 text-quaternary-600">
          {errors.terms.message}
        </span>
      )}
      <Button
        className="mt-4 w-full py-3"
        type="submit"
        dataTest="sign-in-button"
        disabled={loading}
      >
        Sign in
      </Button>
    </form>
  )
}
