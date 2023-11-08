import dynamic from "next/dynamic";
import Image from "next/image";
import AsideMobile from "./asideMobile";

export default function Header() {
  const DropdownMenu = dynamic(() => import("./dropdownMenu"), {
    ssr: false,
  });
  //z-10 shadow-[0px_4px_8px_rgba(77,77,77,0.1)] grid grid-cols-2 grid-rows-1 py-[1rem] lg:flex lg:items-center lg:justify-between h-[4rem] px-[2.5rem]
  return (
    <header className="border-b-4  border-secondary-800/10  flex h-[3rem] lg:h-[4rem] px-[1.5rem] lg:px-[2.5rem] items-center justify-between">
      <AsideMobile />
      <Image
        src="./logo.svg"
        className="place-self-center"
        alt="Logo coin-synch"
        width={124}
        height={21}
      />
      <DropdownMenu />
    </header>
  );
}
