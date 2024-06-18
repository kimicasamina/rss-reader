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
      <Toaster
        position="top-center"
        reverseOrder={false}
        // toastOptions={{
        //   className: "",
        //   style: {
        //     border: "1px solid #713200",
        //     padding: "16px",
        //     color: "#713200",
        //     width: "100px",
        //   },
        //   success: {
        //     iconTheme: {
        //       primary: "green",
        //       secondary: "black",
        //     },
        //   },
        //   error: {
        //     iconTheme: {
        //       primary: "green",
        //       secondary: "black",
        //     },
        //   },
        // }}
      />
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}
