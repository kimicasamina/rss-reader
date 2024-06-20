import React from "react";
import {
  RestartIcon,
  AddIcon,
  SearchIcon,
  AdjustmentIcon,
} from "../../../assets/icons";
import { useDispatch } from "react-redux";
import { setModal } from "../../../redux/reducers/ui";

export default function PageHeader() {
  const dispatch = useDispatch();
  const handleAddSub = (e) => {
    console.log("ADD SUB");
    dispatch(setModal({ isVisible: true, content: "addsub" }));
  };
  return (
    <div className="flex w-full flex-col tablet:flex-row items-start justify-between tablet:items-center gap-y-1 py-2 absolute bg-tertiary/50 backdrop-blur-lg left-0 right-0 top-12 tablet:top-0 px-4 tablet:px-8">
      <div className="flex flex-row gap-y-2">
        <div className="flex flex-wrap items-center gap-x-2">
          <h1 className="text-black ">Refresh</h1>
          <RestartIcon className={"cursor-pointer hover:text-secondary"} />
          <p className="text-sm tablet:text-base w-full opacity-70 ">
            Latest from your feeds.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-x-4">
        <button className="flex items-center gap-x-2 cursor-pointer">
          <SearchIcon className={`w-5 h-5`} />
          Search
        </button>
        <button className="flex items-center gap-x-2 cursor-pointer">
          <AdjustmentIcon className={`w-5 h-5`} />
          Filter
        </button>
        <button
          className="flex items-center gap-x-2 cursor-pointer"
          onClick={handleAddSub}
        >
          <AddIcon className={`w-5 h-5`} />
          Add Feed
        </button>
      </div>
    </div>
  );
}
