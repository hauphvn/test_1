import * as React from "react";
import { Navigate } from "react-router-dom";

export interface LandingRouteProps {}

export function LandingRoute(props: LandingRouteProps) {
  const isLoggin = Boolean(localStorage.getItem("access_token"));
  if (isLoggin) {
    return <Navigate to="/admin" />;
  }
  return <Navigate to="/login" />;
}
