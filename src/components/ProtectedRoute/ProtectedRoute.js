// HOC wrapper component
// always returns a Route component
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
  const loggedIn = useContext(AuthContext);

  return loggedIn ? children : <Navigate to ='/'/>;
};

export default ProtectedRoute;
