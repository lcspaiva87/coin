'use client'
import { ListCoinData } from '@/@types/typeCoins'

import clsx from 'clsx'
import Marquee from 'react-fast-marquee'
import FormattedNumber from './FormattedNumber'
export function CoinCarrousel({
  coinList,
  className,
  isLoading = true,
}: {
  coinList: ListCoinData[]
  className: string
  isLoading: boolean
}) {
  return (
    <>
      {isLoading ? (
        <div className=" flex animate-pulse gap-3 pr-[1rem]">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="h-[0.6rem] w-[3rem] bg-secondary-700  pl-[1rem]"
            />
          ))}
        </div>
      ) : (
        <div className={clsx('mx-2 px-4 py-[5px]', className)}>
          <div className="coin-carrousel-opacity-mask overflow-hidden ">
            <Marquee>
              {coinList.map((item: ListCoinData, index: number) => (
                <Coin coinList={item} key={String(index)} />
              ))}
            </Marquee>
          </div>
        </div>
      )}
    </>
  )
}

const Coin = ({ coinList }: { coinList: ListCoinData }) => {
  console.log('coinList', coinList)
  return (
    <div
      className="flex flex-shrink-0 items-center gap-2 px-3 text-small-label"
      key={coinList?.lastId}
    >
      <span className="text-secondary-800">{coinList?.symbol}</span>
      <span
        className={clsx({
          'text-tertiary-700': Number(coinList.priceChange) >= 0,
          'text-quaternary-500': Number(coinList.priceChange) < 0,
        })}
      >
        <FormattedNumber
          number={Number(coinList.priceChange)}
          options={{
            signDisplay: 'always',
            minimumFractionDigits: 3,
            maximumFractionDigits: 3,
          }}
        />
      </span>
    </div>
  )
}
