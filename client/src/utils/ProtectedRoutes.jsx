import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/useAuth";

export default function ProtectedRoutes() {
  const { user, isLoading, error } = useAuth();
  // const user = false;
  return user ? <Outlet /> : null;
  // <Navigate to="/login" />
}
