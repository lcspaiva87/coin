"use client"; // Error components must be Client Components

import data from "@/assets/lotties/404.json";
import Button from "@/components/ui/button";
import Lottie from "lottie-react";
import { useRouter } from "next/navigation";
export default function Error() {
  const router = useRouter();
  return (
    <div className="flex justify-center w-full h-full">
      <div className=" flex justify-center items-center flex-col">
        <Lottie
          data-testid="loading-lottie"
          animationData={data}
          loop
          className="w-[30rem] lg:w-[40rem]"
        />
        <Button
          dataTest=""
          variant="primary"
          className="px-[2rem]"
          onClick={() => {
            router.push("/");
          }}
        >
          Voltar
        </Button>
      </div>
    </div>
  );
}
