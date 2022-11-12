import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Navigation(props) {
  const currentPath = window.location.pathname;

  const loggedIn = useContext(AuthContext);
  const currentUser = useContext(CurrentUserContext);

  return (
    <>
      <nav className={props.isMobileButtonOpen ? "nav nav_active" : "nav"}>
        <Link
          to='/'
          className={`${
            props.isMobileButtonOpen
              ? "nav__link-home"
              : currentPath.includes(`/saved-news`)
              ? "nav__link-home nav__link-home_theme_dark"
              : "nav__link-home nav__link-home_theme_light"
          }`}
        >
          Home
        </Link>

        {loggedIn && (
          <Link
            className={
              currentPath.includes("/saved-news")
                ? "nav__link-articles"
                : "nav__link-articles nav__link-articles_theme_light"
            }
            to='/saved-news'
          >
            Saved articles
          </Link>
        )}

        <button
          className={`${
            props.isMobileButtonOpen
              ? "nav__login-button"
              : currentPath.includes(`/saved-news`)
              ? "nav__login-button nav__login-button_theme_dark"
              : "nav__login-button"
          }`}
          onClick={loggedIn ? props.handleLogOut : props.isSigninPopupOpen}
        >
          {loggedIn ? currentUser.name : "Sign in"}
          <i
            className={`${
              loggedIn && currentPath.includes(`/saved-news`)
                ? "nav__logout-button-icon_theme_dark"
                : loggedIn && "nav__logout-button-icon"
            }`}
          ></i>
        </button>
      </nav>
    </>
  );
}

export default Navigation;
