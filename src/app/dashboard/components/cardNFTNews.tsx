export function CardNFTNews() {
  return (
    <section
    className="flex min-h-full basis-1/2 flex-col justify-between overflow-hidden rounded-lg bg-white
  shadow-lg md:flex-row"
  >
    <div className="flex h-fit flex-col items-start gap-2 p-2 md:basis-3/5 md:gap-1 md:p-4">
      <span className="text-xs font-bold">{`NFT's NEWS`}</span>

      <span className="text-xs text-secondary-500">
        New ElephantX NFT to be lauched!
      </span>

      <button className="hidden text-xs text-primary-500 hover:text-primary-300 md:mt-1 md:block">
        Read more +
      </button>
    </div>

    <div className="flex flex-1 bg-[url(../../public/elephant.png)] bg-cover bg-bottom"></div>
  </section>
  )
}

