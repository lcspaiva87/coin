import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header
    className="text-sm xl:max-w-[1240px] 2xl:max-w-[1400px] lg: container grid w-full grid-cols-[auto] grid-rows-[1fr_auto]  py-2 shadow-md
  md:px-[7rem] lg:grid-cols-[auto_1fr_auto] lg:grid-rows-1 lg:py-3 lg:shadow-none"
  >
    <div className="flex w-full items-center">
      <Link href="/" className="md:mr-10">
        <Image
          src='/logo.svg'
          alt="Logo CoincSynch"
          width={124}
          height={24}
        />
      </Link>
      <nav className="hidden items-center gap-6 md:flex">
        <Link href="#about-us" className="text-label hover:underline">
          Lorem ipsum
        </Link>
        <Link href="#top-cryptos" className="text-label hover:underline">
          Top cryptos
        </Link>
      </nav>
    </div>
    <div
      className="col-span-2 row-start-2 flex h-6 w-full items-center justify-center border-t border-secondary-200
      lg:col-span-1 lg:row-start-auto lg:h-full lg:justify-end lg:border-none "
    >
      {/* <CoinCarrousel
        className="ml-auto max-w-[450px] "
        coinList={data}
        isLoading={isLoading}
      /> */}
    </div>
    <div className="flex w-full items-center">
      {/* <HeadLoginer /> */}
    </div>
  </header>
  );
}
