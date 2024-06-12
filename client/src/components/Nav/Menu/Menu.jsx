import React from "react";

// icons
import { SettingsIcon } from "../../../assets/icons";
import { HomeIcon } from "../../../assets/icons";
import { LogoutIcon } from "../../../assets/icons";
import { BookmarkIcon } from "../../../assets/icons";
import { TagIcon } from "../../../assets/icons";

export default function Menu({ menuHidden }) {
  return (
    <div className="">
      {/* ---- SIDEBAR MENU ----- */}
      <div className={`${menuHidden ? "hidden" : "flex"} flex-col mb-4`}>
        <div className="flex items-center gap-x-2 py-1 cursor-pointer hover-bg-menu group ">
          <HomeIcon
            className={
              "group-hover:text-primary group-hover:ease-in-out group-hover:duration-200 h-5 "
            }
          />
          <p className="group-hover:text-primary group-hover:ease-in-out group-hover:duration-200">
            Feed
          </p>
        </div>
        <div className="flex items-center gap-x-2 py-1 cursor-pointer hover-bg-menu group ">
          <BookmarkIcon
            className={
              "group-hover:text-primary group-hover:ease-in-out group-hover:duration-200 h-5 "
            }
          />
          <p className="group-hover:text-primary group-hover:ease-in-out group-hover:duration-200">
            Favorites
          </p>
        </div>
        <div className="flex items-center gap-x-2 py-1 cursor-pointer hover-bg-menu group ">
          <TagIcon
            className={
              "group-hover:text-primary group-hover:ease-in-out group-hover:duration-200 h-5 "
            }
          />
          <p className="group-hover:text-primary group-hover:ease-in-out group-hover:duration-200">
            Tag
          </p>
        </div>
        <div className="flex items-center gap-x-2 py-1 cursor-pointer hover-bg-menu group ">
          <SettingsIcon
            className={
              "group-hover:text-primary group-hover:ease-in-out group-hover:duration-200 h-5 "
            }
          />
          <p className="group-hover:text-primary group-hover:ease-in-out group-hover:duration-200 ">
            Settings
          </p>
        </div>
        <div className="flex items-center gap-x-2 py-1 cursor-pointer hover-bg-menu group ">
          <LogoutIcon
            className={
              "group-hover:text-primary group-hover:ease-in-out group-hover:duration-200 h-5 "
            }
          />
          <p className="group-hover:text-primary group-hover:ease-in-out group-hover:duration-200 ">
            Logout
          </p>
        </div>
      </div>

      {/* END  */}
    </div>
  );
}
