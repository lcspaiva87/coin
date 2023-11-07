import dynamic from "next/dynamic";
import Image from "next/image";
import AsideMobile from "./asideMobile";

export default function Header() {
  const DropdownMenu = dynamic(() => import("./dropdownMenu"), {
    ssr: false,
  });
  //z-10 shadow-[0px_4px_8px_rgba(77,77,77,0.1)] grid grid-cols-2 grid-rows-1 py-[1rem] lg:flex lg:items-center lg:justify-between h-[4rem] px-[2.5rem]
  return (
    <>
      <header className="shadow-[0px_4px_8px_rgba(77,77,77,0.1)]  flex  h-[4rem] px-[2.5rem]  justify-between">
        <AsideMobile />
        <Image
          src="./logo.svg"
          className="place-self-center"
          alt="Logo coin-synch"
          width={124}
          height={21}
        />
        <DropdownMenu  />
      </header>
    </>
  );
}
