import React from "react";

import { UserIcon, MenuIcon } from "../../../assets/icons";

import Menu from "../Menu/Menu";
import Feed from "../Feed/Feed";

export default function MobileNav({ displayMobileNav, setDisplayMobileNav }) {
  return (
    <div
      className={`absolute z-10 w-full bg-tertiary tablet:hidden px-2 py-2 flex flex-col ${displayMobileNav ? "h-full bg-tertiary" : "pb-0"}`}
    >
      <div
        className={` w-full flex justify-between items-center h-8 py-4 ${displayMobileNav ? "mb-4" : "mb-2"}`}
      >
        <div className="flex items-center gap-x-2">
          <UserIcon
            className={"hover:animation-ease-in-out h-6 cursor-pointer "}
          />
          <h2 className="text-secondary">Kimi</h2>
        </div>
        <button
          className=""
          onClick={(e) => setDisplayMobileNav((prev) => !prev)}
        >
          <MenuIcon
            className={
              "tablet:hidden cursor-pointer hover:text-secondary hover:ease-in-out group-hover:duration-200 h-6"
            }
          />
        </button>
      </div>
      {displayMobileNav ? (
        <div className="flex flex-col flex-1">
          <Menu />
          <Feed />
        </div>
      ) : null}
    </div>
  );
}