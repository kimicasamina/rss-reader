import React, { useContext } from "react";

import { Link, useLocation } from "react-router-dom";

// icons
import { SettingsIcon } from "../../../../assets/icons";
import { HomeIcon } from "../../../../assets/icons";
import { LogoutIcon } from "../../../../assets/icons";
import { LoginIcon } from "../../../../assets/icons";
import { BookmarkIcon } from "../../../../assets/icons";
import { TagIcon } from "../../../../assets/icons";
import { useAuth } from "../../../../context/useAuth";
import { useSelector, useDispatch } from "react-redux";
import { setModal } from "../../../../redux/reducers/ui";
export default function Menu({ menuHidden }) {
  const { user, logoutUser } = useAuth();
  const uiModal = useSelector((state) => state.ui.modal);
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className={`${menuHidden ? "hidden" : "flex"} flex-col mb-8`}>
      <Link
        to="/"
        className={`flex items-center gap-x-2 py-1 cursor-pointer hover-bg-primary group `}
      >
        <HomeIcon
          className={`group-hover:text-primary group-hover:ease-in-out group-hover:duration-200 h-5 text-neutral-5 ${path === "/" ? "text-primary" : ""}`}
        />
        <a
          className={`group-hover:text-primary group-hover:ease-in-out group-hover:duration-200 ${path === "/" ? "text-primary" : ""}`}
        >
          Home
        </a>
      </Link>
      <div className="flex items-center gap-x-2 py-1 cursor-pointer group ">
        <BookmarkIcon
          className={
            "group-hover:text-primary group-hover:ease-in-out group-hover:duration-200 h-5 text-neutral-5"
          }
        />
        <a className="group-hover:text-primary group-hover:ease-in-out group-hover:duration-200 ">
          Favorites
        </a>
      </div>
      <div className="flex items-center gap-x-2 py-1 cursor-pointer group ">
        <TagIcon
          className={
            "group-hover:text-primary group-hover:ease-in-out group-hover:duration-200 h-5 text-neutral-5"
          }
        />
        <a className="group-hover:text-primary group-hover:ease-in-out group-hover:duration-200">
          Tag
        </a>
      </div>
      <div className="flex items-center gap-x-2 py-1 cursor-pointer group ">
        <SettingsIcon
          className={
            "group-hover:text-primary group-hover:ease-in-out group-hover:duration-200 h-5 text-neutral-5"
          }
        />
        <a className="group-hover:text-primary group-hover:ease-in-out group-hover:duration-200 ">
          Settings
        </a>
      </div>
      <div className="flex items-center gap-x-2 py-1 cursor-pointer group ">
        {user ? (
          <button
            className="w-full items-center flex gap-x-2"
            onClick={logoutUser}
          >
            <LogoutIcon
              className={
                "group-hover:text-primary group-hover:ease-in-out group-hover:duration-200 h-5 text-neutral-5"
              }
            />
            <a className="group-hover:text-primary group-hover:ease-in-out group-hover:duration-200 ">
              Logout
            </a>
          </button>
        ) : (
          <button
            className="w-full items-center flex gap-x-2 "
            onClick={(e) =>
              dispatch(setModal({ isVisible: true, content: "login" }))
            }
          >
            <LoginIcon
              className={
                "group-hover:text-primary group-hover:ease-in-out group-hover:duration-200 h-5 text-neutral-5"
              }
            />
            <a className="group-hover:text-primary group-hover:ease-in-out group-hover:duration-200 ">
              Login/Signup
            </a>
          </button>
        )}
      </div>
    </div>
  );
}
