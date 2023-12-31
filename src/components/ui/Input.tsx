'use client'
import { validateEmailFormat } from '@/utils/validateEmail'
import clsx from 'clsx'
import { useState } from 'react'
import { Controller } from 'react-hook-form'
import { Icons } from './icons'

type InputType = 'text' | 'email' | 'password' | 'number' | 'username'
type InputProps = {
  type: InputType
  name: string
  required?: boolean
  placeholder?: string
  disabled?: boolean
  className?: string
  control?: any
  dataTest: string
}

export const Input = ({
  type,
  name,
  required = false,
  placeholder,
  disabled = false,
  className,
  control,
  dataTest,
}: InputProps) => {
  const [inputType, setInputType] = useState<InputType>(type)
  const [error, setError] = useState<string | undefined>(undefined)
  const validateInput = (inputValue: string | number) => {
    if (required && inputValue.toString().trim().length === 0) {
      return 'Campo obrigatório'
    }

    if (type === 'email' && typeof inputValue === 'string') {
      const result = validateEmailFormat(inputValue, { required })
      if (!result.ok) {
        return result.error
      }
    }

    if (type === 'password' && typeof inputValue === 'string') {
      if (inputValue.length < 8) {
        return 'A senha deve ter pelo menos 8 caracteres'
      }
    }

    return undefined
  }

  const handleTogglePasswordVisibility = () => {
    setInputType((prev) => (prev === 'password' ? 'text' : 'password'))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    setError(validateInput(inputValue))
  }
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required }}
      render={({ field }) => (
        <label className="flex w-full flex-col">
          <div
            className={clsx(
              'flex w-full items-center gap-2 rounded-lg border border-secondary-300 p-3 transition-colors  focus-within:border-primary-300',
              className,
              { 'bg-secondary-200': disabled },
            )}
          >
            {type === 'email' && <Icons.Envelope className="flex-shrink-0" />}
            {type === 'username' && <Icons.User className="flex-shrink-0" />}
            {type === 'password' && <Icons.Lock className="flex-shrink-0" />}

            <input
              data-testid={dataTest}
              type={inputType}
              name={name}
              value={field.value}
              placeholder={placeholder}
              disabled={disabled}
              onChange={(e) => {
                field.onChange(e)
                handleChange(e)
              }}
              className="w-full border-none bg-transparent p-0 text-label placeholder:text-secondary-400 focus:outline-none focus:ring-0"
            />
            {type === 'password' && (
              <button
                onClick={handleTogglePasswordVisibility}
                className="group flex-shrink-0"
                type="button"
              >
                <Icons.Eye className="fill-secondary-300 transition-colors group-hover:fill-secondary-400 group-active:fill-secondary-500" />
              </button>
            )}
          </div>
          {error && <p className="text-sm mt-1 text-quaternary-600">{error}</p>}
        </label>
      )}
    />
  )
}
