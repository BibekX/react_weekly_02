import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function RequireAuth(props) {
  const isAuthenticated = useSelector((store) => store.auth.isAuthenticated);
  console.log("props", props);
  return isAuthenticated ? props.children : <Navigate to="/login" />;
}
