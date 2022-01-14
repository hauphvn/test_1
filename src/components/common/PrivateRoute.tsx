import * as React from "react";
import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }: any) {
  const isLoggin = Boolean(localStorage.getItem("access_token"));
  if (!isLoggin) {
    return <Navigate to="/login" />;
  }
  return children;
}
