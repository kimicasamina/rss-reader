import React, { useContext } from "react";

import { Link } from "react-router-dom";

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

  return (
    <div className="">
      {/* ---- SIDEBAR MENU ----- */}
      <div className={`${menuHidden ? "hidden" : "flex"} flex-col mb-8`}>
        <Link
          to="/"
          className="flex items-center gap-x-2 py-1 cursor-pointer hover-bg-menu group "
        >
          <HomeIcon
            className={
              "group-hover:text-primary group-hover:ease-in-out group-hover:duration-200 h-5 "
            }
          />
          <p className="group-hover:text-primary group-hover:ease-in-out group-hover:duration-200">
            Home
          </p>
        </Link>
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
          {user ? (
            <button className="w-full flex gap-x-2" onClick={logoutUser}>
              <LogoutIcon
                className={
                  "group-hover:text-primary group-hover:ease-in-out group-hover:duration-200 h-5 "
                }
              />
              <p className="group-hover:text-primary group-hover:ease-in-out group-hover:duration-200 ">
                Logout
              </p>
            </button>
          ) : (
            <button
              className="w-full flex gap-x-2 "
              onClick={(e) =>
                dispatch(setModal({ isVisible: true, content: "login" }))
              }
            >
              <LoginIcon
                className={
                  "group-hover:text-primary group-hover:ease-in-out group-hover:duration-200 h-5 "
                }
              />
              <p className="group-hover:text-primary group-hover:ease-in-out group-hover:duration-200 ">
                Login/Signup
              </p>
            </button>
          )}
        </div>
      </div>

      {/* END  */}
    </div>
  );
}
