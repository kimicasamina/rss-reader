import React from "react";

// rrd
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

// import hot toast
import toast, { Toaster } from "react-hot-toast";
import { HomeIcon } from "./assets/icons";

// pages and layout
import RootLayout from "./pages/Layout/RootLayout";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Home from "./pages/Home/Home";

// hooks
import { AuthContextProvider } from "./context/useAuth";
import { UiContextProvider } from "./context/useUi";
import Feed from "./pages/Feed/Feed";

// components
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/:feed" element={<Feed />} />
      {/* <Route element={<ProtectedRoutes />}>
      </Route> */}
    </Route>
  )
);
export default function App() {
  return (
    <AuthContextProvider>
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}
