import React from "react";
import { Route, Routes } from "react-router";
import { LoginPage, RegisterPage } from "../pages";
import { Navigate } from "react-router";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />

      <Route path="/*" element={<Navigate to={"/auth/login"} />} />
    </Routes>
  );
};
