"use client";
import Lottie from "lottie-react";

import data from "@/assets/lotties/loading.json";

const Loading = () => {
  return (
    <div className="flex justify-center w-full h-full">
      <div className=" flex justify-center items-center flex-col">
        <Lottie
          data-testid="loading-lottie"
          animationData={data}
          loop
          className="w-[30rem] lg:w-[40rem]"
        />

      </div>
    </div>
  );
};

export default Loading;
