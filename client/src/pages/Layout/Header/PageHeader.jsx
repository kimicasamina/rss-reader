import React from "react";
// import {
//   RestartIcon,
//   AddIcon,
//   SearchIcon,
//   AdjustmentIcon,
// } from "../../assets/icons";
import {
  RestartIcon,
  AddIcon,
  SearchIcon,
  AdjustmentIcon,
} from "../../../assets/icons";
import { useDispatch } from "react-redux";
// import { setModal } from "../../../redux/reducers/ui";
import { setModal } from "../../../redux/reducers/ui";
export default function PageHeader() {
  const dispatch = useDispatch();
  const handleAddSub = (e) => {
    console.log("ADD SUB");
    dispatch(setModal({ isVisible: true, content: "addfeed" }));
  };
  return (
    <div className="flex w-full flex-col tablet:flex-row items-start justify-between tablet:items-center gap-y-1 py-2 bg-tertiary/70 background-blur-xl absolute left-0 right-0 top-12 tablet:top-0 px-4 tablet:px-8 ">
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center gap-x-2">
          <h1 className="text-black ">Home</h1>
          <RestartIcon className={``} />
        </div>
        {/* <p className="text-sm w-full opacity-70">Latest from your feeds.</p> */}
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
