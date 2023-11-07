import { CoinData } from '@/@types/typeCoins'
import { Controller } from 'react-hook-form'
import { ListboxField } from './ListboxField'

type InputProps = {
  coinList: CoinData
  name: string
  required?: boolean
  placeholder?: string
  disabled?: boolean
  className?: string
  control?: any
}
export function Select({
  coinList,
  name,
  required = false,
  control,
}: InputProps) {
  console.log(coinList)
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required }}
      render={({ field }) => (
        <div className=" top-16 ">
          <ListboxField
            coinList={coinList}
            field={field.value}
            onChange={field.onChange}
          />
        </div>
      )}
    />
  )
}
