import React from "react";
// icons
import { AddIcon, SearchIcon } from "../../../../assets/icons";

export default function FeedMenu() {
  return (
    <>
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-secondary">Feeds</h2>
        <AddIcon
          className={
            "cursor-pointer hover:text-secondary hover:ease-in-out group-hover:duration-200 h-6"
          }
        />
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
