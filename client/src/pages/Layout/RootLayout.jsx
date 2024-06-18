import React, { useEffect, useMemo, useState } from "react";

// rrd
import { Outlet } from "react-router-dom";

// library
import toast from "react-hot-toast";
import axios from "axios";

// components
import Sidebar from "../../components/Nav/Sidebar/Sidebar";
import MobileNav from "../../components/Nav/Mobile/MobileNav";
import Login from "../../components/Login/Login";
import Signup from "../../components/Signup/Signup";

// redux
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/reducers/ui";
import AddSub from "../../components/Form/AddSub";
import useFetch from "../../hooks/useFetch";
import { setSubs } from "../../redux/reducers/subscription";
import { useAuth } from "../../context/useAuth";

export default function RootLayout() {
  const [displayMobileNav, setDisplayMobileNav] = useState(false);
  const { user, loginUser, isLoading } = useAuth();

  const uiModal = useSelector((state) => state.ui.modal);
  const dispatch = useDispatch();

  return (
    <div className="flex-col tablet:flex-row flex w-full max-w-screen-desktop mx-auto h-screen relative ">
      {uiModal.isVisible ? (
        <div
          className="w-full h-full absolute flex tablet:place-center bg-tertiary/100 z-20 "
          onClick={() => dispatch(closeModal())}
        >
          {uiModal.content === "login" ? <Login /> : null}
          {uiModal.content === "signup" ? <Signup /> : null}
          {uiModal.content === "addfeed" ? <AddSub /> : null}
        </div>
      ) : null}
      <>
        <MobileNav
          displayMobileNav={displayMobileNav}
          setDisplayMobileNav={setDisplayMobileNav}
        />
        <Sidebar
          displayMobileNav={displayMobileNav}
          setDisplayMobileNav={setDisplayMobileNav}
        />

        <main className="flex-1 bg-white h-screen ">
          <Outlet />
        </main>
      </>
    </div>
  );
}
