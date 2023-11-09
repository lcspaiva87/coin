import { listCoin } from '@/data/fetchCoin'
import dynamic from 'next/dynamic'

export default async function TopCryptos() {
  const response = await listCoin()
  const TopCryptoTable = dynamic(() => import('./topCryptoTable'), {
    ssr: false,
  })
  return (
    <section
      id="top-cryptos"
      className="lg:container flex w-full flex-col items-center px-6 py-14 md:py-20 lg:py-32"
    >
      <h2 className="mb-4 text-xl font-bold md:text-2xl lg:mb-12 lg:text-3xl">
        Top Cryptos
      </h2>
      <TopCryptoTable coinList={response} />
    </section>
  )
}
