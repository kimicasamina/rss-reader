import React from "react";

// rrd
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

// pages and layout
import RootLayout from "./pages/Layout/RootLayout";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Home from "./pages/Home/Home";

// hooks
import { AuthContextProvider } from "./context/useAuth";
import { UiContextProvider } from "./context/useUi";

// components
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      {/* <Route element={<ProtectedRoutes />}>
      </Route> */}
    </Route>
  )
);
export default function App() {
  return (
    // <UiContextProvider>
    // </UiContextProvider>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}
