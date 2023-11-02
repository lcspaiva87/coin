import clsx from 'clsx'
type Type = 'button' | 'submit'
type Variant = 'primary' | 'ghost'

export type Props = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  className?: string
  variant?: Variant
  children: React.ReactNode
  type?: Type
  disabled?: boolean
  dataTest: string
}

const defaultClassName = 'text-label'

export const primaryClassName =
  'bg-primary-500 disabled:bg-secondary text-white py-[0.5rem] px-[1rem] text-sm	 rounded-full hover:bg-primary-400 active:bg-primary-600 transition-colors focus:outline-none focus-visible:ring focus-visible:ring-secondary'
const ghostClassName =
  'bg-transparent hover:underline active:text-secondary-900 transition-colors text-sm	'

const Button = ({
  onClick,
  className,
  variant = 'primary',
  type = 'button',
  disabled,
  children,
  dataTest,
}: Props) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      data-testid={dataTest}
      className={clsx(
        defaultClassName,
        {
          [primaryClassName]: variant === 'primary',
          [ghostClassName]: variant === 'ghost',
        },
        className,
      )}
    >
      {children}
    </button>
  )
}

export default Button
