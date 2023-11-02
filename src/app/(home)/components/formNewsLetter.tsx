'use client'

import { Control, useForm } from 'react-hook-form'

import { Input } from '@/components/ui/Input'
import Button from '@/components/ui/button'


type FormValues = {
  emailForm: string
}
const defaultValues = {
  emailForm: '',
}
export function NewsLetterForm() {
  // const { mutate: registerUser, isLoading: loading } = useNewsLetterMutation()
  const {
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues,
  })
  // async function onSubmit({ emailForm }: FormValues) {
  //   registerUser(emailForm, {
  //     onError: (error: any) => {
  //       Object.keys(error?.response?.data).forEach((field: any) => {
  //         setError(field, {
  //           message: error?.response?.data[field][0],
  //         })
  //       })
  //     },
  //   })
  // }

  return (
    <form  className="mt-10 md:w-[35rem]">
      <Input
        type="email"
        name="emailForm"
        className="max-w-full border-none bg-white text-secondary shadow-xl"
        placeholder="Email"
        required
        control={control as Control<FormValues>}
        // disabled={loading}
        dataTest="input-email"
      />
      <Button
        dataTest="button-subscribe-newsletter"
        // disabled={loading}
        className="mt-4 w-full px-[1.5rem] py-[0.875rem] shadow-xl md:mt-[21px]"
        type="submit"
      >
        Subscribe
        {/* {loading ? <LoadingSpinner className="mx-auto" /> : 'Subscribe'} */}
      </Button>
    </form>
  )
}
