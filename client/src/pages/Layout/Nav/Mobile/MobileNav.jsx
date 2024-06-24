import React from "react";

import { UserIcon, MenuIcon, RssIcon } from "../../../../assets/icons";

// components
import Menu from "../Menu/Menu";
import Feed from "../Feed/Feed";
import User from "../User/User";

export default function MobileNav({
  displayMobileNav,
  setDisplayMobileNav,
  setShowLogin,
}) {
  return (
    <div
      className={`absolute z-10 w-full bg-gray-5 tablet:hidden px-2 py-2 flex flex-col ${displayMobileNav ? "h-full bg-tertiary" : "pb-0"}`}
    >
      <div
        className={` w-full flex justify-between items-center h-8 py-4 ${displayMobileNav ? "mb-4" : "mb-2"}`}
      >
        <div className="w-full flex items-center gap-x-2">
          <RssIcon className={`w-6 h-6 bg-primary rounded-full p-1 `} />
          <h1 className="">RSS Reader</h1>
        </div>
        <button
          className=""
          onClick={(e) => setDisplayMobileNav((prev) => !prev)}
        >
          <MenuIcon
            className={
              "tablet:hidden cursor-pointer hover:text-white hover:ease-in-out group-hover:duration-200 h-6 text-neutral-5"
            }
          />
        </button>
      </div>
      {displayMobileNav ? (
        <div className="flex flex-col flex-1">
          <User />
          <Menu setShowLogin={setShowLogin} />
          <Feed />
        </div>
      ) : null}
    </div>
  );
}
