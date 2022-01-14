import * as React from "react";
import { Navigate } from "react-router-dom";

export function LoginRoute({ children }: any) {
  const isLoggin = Boolean(localStorage.getItem("access_token"));
  if (isLoggin) {
    return <Navigate to="/admin" />;
  }
  return children;
}
