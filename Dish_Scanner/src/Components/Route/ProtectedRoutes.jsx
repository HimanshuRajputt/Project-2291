// import React from 'react'

// import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
// import { AdminLoginContext } from "../../Context/AdminLoginContext";

export const ProtectedRoutes = ( ) => {
  // const role = localStorage.getItem("role")
  const token = localStorage.getItem("authToken")
    //  const { AdminLogin } = useContext(AdminLoginContext);
//   const hardcodedToken = localStorage.get("hardcoded-token");


  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;