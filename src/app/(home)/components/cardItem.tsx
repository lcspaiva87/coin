import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

interface SolutionsCardProps {
  icon: StaticImport
  alt: string
}

export default function CardItem({ icon, alt }: SolutionsCardProps) {
  return (
    <div
      className="min-w-[208px] cursor-default space-y-4 rounded-md bg-white p-6 shadow-lg transition-all duration-300 
      hover:shadow-md md:w-[280px] md:hover:scale-105 lg:w-[240px] xl:w-[280px]"
    >
      <Image src={icon} alt={alt} width={64} className="w-10 md:w-16" />
      <div>
        <span className="mb-1 text-sm font-bold text-primary-500 md:text-base lg:text-xl">
          For your company
        </span>
        <h3 className="mb-2 text-xl font-bold md:text-2xl">Crypto Solutions</h3>
        <p className="text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        </p>
      </div>
    </div>
  )
}
