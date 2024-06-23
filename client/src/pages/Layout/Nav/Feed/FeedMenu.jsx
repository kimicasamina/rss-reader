import React from "react";
<<<<<<< HEAD
// icons
import { AddIcon, SearchIcon } from "../../../../assets/icons";
=======

import { AddIcon, SearchIcon } from "../../../../assets/icons";
import { useDispatch } from "react-redux";
import { setModal } from "../../../../redux/reducers/ui";
>>>>>>> deletefeed

export default function FeedMenu() {
  const dispatch = useDispatch();

  const handleAddSub = () => {
    console.log("add sub");
    dispatch(setModal({ isVisible: true, content: "addsub" }));
  };
  return (
    <>
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-secondary">Feeds</h2>
        <button className="" onClick={handleAddSub}>
          <AddIcon
            className={
              "cursor-pointer hover:text-secondary hover:ease-in-out group-hover:duration-200 h-6"
            }
          />
        </button>
      </div>
      {/* ---- FEED MENU SEARCH INPUT ---- */}
      <div className="relative flex bg-transparent mb-2">
        <div className="flex w-full items-center border-b gap-x-2 py-1">
          <SearchIcon
            className={"hover:animation-ease-in-out h-5 cursor-pointer "}
          />
          <input
            type="text"
            className="bg-transparent outline-none w-full "
            placeholder="Search feeds"
          />
        </div>
      </div>
    </>
  );
}
