import React, { useState } from "react";

// rrd
import { Outlet } from "react-router-dom";

// components
import Sidebar from "../../components/Nav/Sidebar/Sidebar";
import MobileNav from "../../components/Nav/Mobile/MobileNav";

export default function RootLayout() {
  const [displayMobileNav, setDisplayMobileNav] = useState(false);

  return (
    <div className="flex-col tablet:flex-row flex w-full max-w-screen-desktop mx-auto h-screen relative ">
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
    </div>
  );
}
