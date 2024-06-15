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
import Login from "./components/Login/Login";
import Signup from "./pages/Signup/Signup";

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
      {/* <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} /> */}
    </Route>
  )
);
export default function App() {
  return (
    <UiContextProvider>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </UiContextProvider>
  );
}
