import React, { useState } from "react";

// rrd
import { Outlet } from "react-router-dom";

// components
import Sidebar from "../../components/Nav/Sidebar/Sidebar";
import MobileNav from "../../components/Nav/Mobile/MobileNav";
import { useUi } from "../../context/useUi";
import Login from "../../components/Login/Login";

export default function RootLayout() {
  const [displayMobileNav, setDisplayMobileNav] = useState(false);
  const { showLogin, setShowLogin } = useUi();
  console.log("showlogin:", showLogin);

  return (
    <div className="flex-col tablet:flex-row flex w-full max-w-screen-desktop mx-auto h-screen relative ">
      {showLogin ? (
        <div
          className="absolute h-screen w-full inset-0 bg-brand-gradient z-20"
          onClick={(e) => {
            e.stopPropagation();
            setShowLogin(false);
          }}
        >
          <Login />
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
