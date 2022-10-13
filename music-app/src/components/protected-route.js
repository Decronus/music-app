import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children, redirectPath = "/login" }) => {
  if (!localStorage.getItem("islogin")) {
    return <Navigate to={redirectPath} replace={true} />;
  }

  return children;
};
