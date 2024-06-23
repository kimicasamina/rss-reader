import React from "react";

export default function Loading() {
  return (
    <div className="bg-tertiary backdrop-blur-lg absolute w-full h-full flex place-center">
      <h1 className=" text-3xl tablet:text-6xl">
        LOADING
        <div className="pt-2 h-20 flex items-center justify-center gap-x-2">
          <span className="w-4 h-4 rounded-full bg-primary animation-delay-0 bounceAnimation "></span>
          <span className="w-4 h-4 rounded-full bg-primary animation-delay-500 bounceAnimation "></span>
          <span className="w-4 h-4 rounded-full bg-primary animation-delay-1000 bounceAnimation "></span>
        </div>
      </h1>
    </div>
  );
}
