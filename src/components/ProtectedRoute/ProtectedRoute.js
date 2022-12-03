// HOC wrapper component
// always returns a Route component
import { useEffect, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useNavigate, useLocation } from "react-router-dom";

function ProtectedRoute({ children, setSigninPopupOpen, loggedIn }) {

  const navigate = useNavigate();
  const location = useLocation();
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    if (!loggedIn && location.pathname === "/saved-news") {
      navigate("/");
      setSigninPopupOpen(true);
    }
    if (localStorage.getItem("jwt")) {
      setSigninPopupOpen(false);
      navigate("/saved-news");
    }
  }, [loggedIn, location.pathname, navigate, setSigninPopupOpen, currentUser]);

  return loggedIn && children;
}
export default ProtectedRoute;
