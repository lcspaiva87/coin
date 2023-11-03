"use client";
import Lottie from "lottie-react";

import data from "@/assets/lotties/loading.json";

const Loading = () => {
  return (
    <div className="max-w-[300px]">
      <Lottie data-testid="loading-lottie" animationData={data} loop />
    </div>
  );
};

export default Loading;
