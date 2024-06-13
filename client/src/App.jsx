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
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

// components
const router = createBrowserRouter(
  createRoutesFromElements(
    // <Route path="/" element={<RootLayout />}>
    //   <ProtectedRoute element={<ProtectedRoute />}>
    //     <Route path="/" element={<Home />} />
    //   </ProtectedRoute>
    //   <Route path="/login" element={<Login />} />
    //   <Route path="/signup" element={<Signup />} />
    // </Route>
    <Route path="/" element={<RootLayout />}>
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Route>
  )
);
export default function App() {
  return <RouterProvider router={router} />;
}
