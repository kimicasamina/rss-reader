import React from "react";

// rrd
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="">
      // Nav
      <main className="">
        <Outlet />
      </main>
    </div>
  );
}
