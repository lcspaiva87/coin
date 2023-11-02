import { Header } from "@/components/ui/header";
import Image from "next/image";
import Hero from "./components/hero";
import Solutions from "./components/solutions";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Image
        src="/waves.svg"
        alt=""
        width={1440}
        height={247}
        aria-hidden
        className="-mt-16 h-[180px] object-cover object-[40%] sm:h-[247px] md:mt-0 md:object-[50%] lg:w-full lg:object-fill lg:object-left"
      />
      <Solutions />
    </>
  );
}
