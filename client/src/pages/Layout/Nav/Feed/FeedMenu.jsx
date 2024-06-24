import React, { useState } from "react";

import { AddIcon, SearchIcon } from "../../../../assets/icons";
import { useDispatch } from "react-redux";
import { setModal } from "../../../../redux/reducers/ui";

export default function FeedMenu({ setSearchKeyword }) {
  const dispatch = useDispatch();

  const handleAddSub = () => {
    console.log("add sub");
    dispatch(setModal({ isVisible: true, content: "addsub" }));
  };

  return (
    <>
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-neutral-5">Feeds</h2>
        <button className="" onClick={handleAddSub}>
          <AddIcon
            className={
              "cursor-pointer hover:text-neutral-20 hover:ease-in-out group-hover:duration-200 h-6 text-neutral-5 "
            }
          />
        </button>
      </div>
      {/* ---- FEED MENU SEARCH INPUT ---- */}
      <div className="relative flex bg-transparent mb-2">
        <div className="flex w-full items-center border-b gap-x-2 py-1">
          <SearchIcon
            className={
              "hover:animation-ease-in-out hover:text-neutral-20 h-5 cursor-pointer text-neutral-5"
            }
          />
          <input
            type="text"
            className="bg-transparent outline-none w-full text-neutral-5"
            placeholder="Search feeds"
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}
