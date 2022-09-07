import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

function Navigation(props) {

  const currentPath = window.location.pathname;

  const loggedIn = useContext(AuthContext);

  return (
    <>
      <nav className={props.isMobileButtonOpen ? "nav nav_active" : "nav"}>
        <Link
          to="/"
          className={`${
            props.isMobileButtonOpen
            ? "nav__link-home" 
            :  currentPath.includes(`/saved-news`)
            ? "nav__link-home nav__link-home_type-dark"
            : "nav__link-home nav__link-home_type-light"
          }`}
        >
          Home
        </Link>

        {currentPath.includes(`/saved-news`) ? (
          <Link to="/saved-news" className="nav__link-articles">
            Saved articles
          </Link>
        ) : null}

 < button
          className={`${
            props.isMobileButtonOpen
            ? "nav__login-button"
            :  currentPath.includes(`/saved-news`)
            ? "nav__login-button nav__login-button_type-dark"
            : "nav__login-button"
          }`}

          onClick={props.isPopupOpen}
        >
          {loggedIn ? props.user.name : "Sign in"}

          <i className={loggedIn ? "nav__logout-button-icon" : ""}></i>
        </button>
      </nav>
    </>
  );
}


export default Navigation;
