import { Navigate, Route } from "react-router";
import { Routes } from "react-router";

import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { CheckingAuth } from "../components/CheckingAuth";
import { authStatus } from "../constants";
import { useCheckAuth } from "../hooks";

export const AppRouter = () => {
  const status = useCheckAuth();

  if (status === authStatus.CHECKING) {
    return <CheckingAuth />;
  }

  return (
    <Routes>
      {status === authStatus.AUTHENTICATED ? (
        <Route path="/*" element={<JournalRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}

      <Route path="/*" element={<Navigate to="auth/login" />} />

      {/* Login and Register */}
      {/* <Route path="/auth/*" element={<AuthRoutes />} /> */}

      {/* JournalApp */}
      {/* <Route path="/*" element={<JournalRoutes />} /> */}

      <Route />
    </Routes>
  );
};
