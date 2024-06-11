import React from "react";

import { AddIcon } from "../../assets/icons";
import { subscription } from "../../constant";
import { category } from "../../constant";

export default function Home() {
  return (
    <div className="flex-1 bg-gray-5 w-full h-screen pt-14 px-4 tablet:mt-0 tablet:px-8 tablet:py-4 ">
      <div className="flex w-full justify-between items-center mb-4">
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center gap-x-2">
            <h1 className="text-black ">Home</h1>
            <AddIcon className={``} />
          </div>
          <p className="text-sm w-full opacity-70">Latest from your feeds.</p>
        </div>
        <button className="btn text-base bg-gray-80 text-tertiary flex items-center justify-evenly px-2 hover:bg-gray-50 hover:text-gray-80 shadow-md ">
          <AddIcon className={`h-5`} />
          New Feed
        </button>
      </div>
    </div>
  );
}
