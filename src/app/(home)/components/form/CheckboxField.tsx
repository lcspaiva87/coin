import { Controller } from 'react-hook-form'
type InputProps = {
  name: string
  required?: boolean
  placeholder?: string
  disabled?: boolean
  className?: string
  control?: any
  dataTest?: string
}
export default function CheckboxField({
  name,
  required,
  control,
  dataTest,
}: InputProps) {
  return (
    <div className="flex text-left">
      <Controller
        name={name}
        control={control}
        rules={{ required }}
        defaultValue={false}
        render={({ field }) => (
          <input
            data-testid={dataTest}
            type="checkbox"
            className="mr-4 rounded-[4px] border-primary-400 text-primary-400 accent-primary focus:ring-primary-400 disabled:text-secondary"
            {...field}
          />
        )}
      />
      <div className="flex items-start text-label">
        <span>
          I have read and accept the <strong>Privacy Policy</strong> and{' '}
          <strong>Terms of User Sign Up</strong>
        </span>
      </div>
    </div>
  )
}
