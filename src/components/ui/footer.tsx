import Image from "next/image";
import Logo from "/public/logo.svg";

export const Footer = () => {
  return (
    <footer className="z-10 shadow-[0px_-4px_8px_rgba(77,77,77,0.1)]">
      <div className="container flex items-center justify-center py-5 md:justify-between lg:py-6">
        <p className="hidden text-label md:block">
          Copyright © 2023 - All rights reserved
        </p>
        <Image src={Logo} className="h-4 w-[95px]" alt="Logo CoincSynch" />
      </div>
    </footer>
  );
};
