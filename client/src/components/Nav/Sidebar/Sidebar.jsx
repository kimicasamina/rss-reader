import React from "react";

import { UserIcon, MenuIcon } from "../../../assets/icons";

import Menu from "../Menu/Menu";
import Feed from "../Feed/Feed";

import User from "../User/User";

export default function Sidebar({ displayMobileNav, setDisplayMobileNav }) {
  return (
    <div className="hidden tablet:flex w-full tablet:max-w-[300px] flex-col px-2 pt-4 pb-2 tablet:bg-tertiary">
      <div
        className={`w-full flex justify-between items-center h-8 py-4 ${displayMobileNav ? "mb-4" : "mb-4"}`}
      >
        <h1 className="">Maruya</h1>
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
      <User />
      <Menu />
      <Feed />
    </div>
  );
}
