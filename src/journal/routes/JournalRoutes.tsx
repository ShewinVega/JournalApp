import React from "react";
import { Route, Routes } from "react-router";
import { JournalPage } from "../pages/JournalPage";
import { Navigate } from "react-router";

export const JournalRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<JournalPage />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
