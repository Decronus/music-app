import { Routes, Route } from "react-router-dom";
import { Comp } from "./components/pages/comp";
import { Main } from "./components/pages/main";
import { MyTracks } from "./components/pages/my-tracks";
import { NotFound } from "./components/pages/not-found";
import { Login } from "./components/pages/login";
import { ProtectedRoute } from "./components/protected-route";
import { SignUp } from "./components/pages/sign-up";
import { useRefreshTokensMutation } from "./user-api";
import { useEffect } from "react";

export const AppRoutes = () => {
  function getCookie(name) {
    let matches = document.cookie.match(
      new RegExp(
        "(?:^|; )" +
          name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
          "=([^;]*)"
      )
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }
  const [refreshTokens] = useRefreshTokensMutation();
  useEffect(() => {
    setInterval(() => {
      const refreshCookie = getCookie("refresh");
      refreshTokens({
        refresh: refreshCookie,
      });
    }, 300000);
  });
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
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
