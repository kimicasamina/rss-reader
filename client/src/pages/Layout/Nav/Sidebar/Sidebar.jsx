import React from "react";

import { UserIcon, MenuIcon, RssIcon } from "../../../../assets/icons";
import Menu from "../Menu/Menu";
import Feed from "../Feed/Feed";

import User from "../User/User";
import tailwindConfig from "../../../../../tailwind.config";

export default function Sidebar({
  displayMobileNav,
  setDisplayMobileNav,
  setShowLogin,
  setModal,
}) {
  return (
    <div className="hidden tablet:flex w-full h-full tablet:max-w-[300px] flex-col px-2 pt-4 pb-2 tablet:bg-gray-5 z-10 ">
      <div
        className={`w-full flex justify-between items-center h-8 py-4 ${displayMobileNav ? "mb-4" : "mb-4"}`}
      >
        <div className="w-full flex items-center gap-x-2">
          <RssIcon
            className={`w-6 h-6 bg-primary rounded-full p-1 `}
            // fill={tailwindConfig.theme.colors.white}
          />
          <h1 className="">RSS Reader</h1>
        </div>
        <button
          className=""
          onClick={(e) => setDisplayMobileNav((prev) => !prev)}
        >
          <MenuIcon
            className={
              "tablet:hidden cursor-pointer hover:text-primary hover:ease-in-out group-hover:duration-200 h-6 text-neutral-5"
            }
          />
        </button>
      </div>
      <User />
      <Menu setModal={setModal} />
      <Feed />
    </div>
  );
}
