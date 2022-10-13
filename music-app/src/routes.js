import { Routes, Route } from "react-router-dom";
import { Comp } from "./components/pages/comp";
import { Main } from "./components/pages/main";
import { MyTracks } from "./components/pages/my-tracks";
import { NotFound } from "./components/pages/not-found";
import { Login } from "./components/pages/login";
import { ProtectedRoute } from "./components/protected-route";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Main />
          </ProtectedRoute>
        }
      />
      {/* <Route path="/login/:islogin" element={<Main />} /> */}
      <Route
        path="/my-tracks"
        element={
          <ProtectedRoute>
            <MyTracks />
          </ProtectedRoute>
        }
      />
      <Route
        path="/comp/:compName"
        element={
          <ProtectedRoute>
            <Comp />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
