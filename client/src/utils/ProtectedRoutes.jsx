import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function ProtectedRoutes() {
  const { user, isLoading, error } = useAuth();
  // const user = false;
  return user ? <Outlet /> : <Navigate to="/login" />;
}
