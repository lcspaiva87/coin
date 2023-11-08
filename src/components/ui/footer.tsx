import Image from 'next/image'
import Logo from '/public/logo.svg'

export const Footer = () => {
  return (
    <footer className="border-t-4  border-secondary-800/10">
      <div className="flex items-center justify-center py-5 px-[2.5rem] md:justify-between lg:py-6">
        <p className="hidden text-label md:block">
          Copyright © 2023 - All rights reserved
        </p>
        <Image src={Logo} className="h-4 w-[95px]" alt="Logo CoincSynch" />
      </div>
    </footer>
  )
}
