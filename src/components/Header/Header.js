import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import HeaderWithSearch from "../HeaderWithSearch/HeaderWithSearch";

function Header(props) {
  const { handleSearchQuery, handleLogOut, isSigninPopupOpen } = props;
  const currentPath = window.location.pathname;
  const location = useLocation();

  const [isMobileButtonOpen, setMobileButtonOpen] = useState(false);

  return (
    <header
      className={
        location.pathname === "/saved-news"
          ? "header header_theme_light"
          : "header header_theme_dark"
      }
    >
      <div
        className={
          isMobileButtonOpen
            ? "header__wrapper header__wrapper_nav-open"
            : "header__wrapper"
        }
      >
        <div className='header__items'>
          <Link
            className={`${
              isMobileButtonOpen
                ? "header__logo"
                : location.pathname === "/saved-news"
                ? "header__logo header__logo_theme_dark"
                : "header__logo"
            }`}
            to='/'
          >
            NewsExplorer
          </Link>

          {isMobileButtonOpen ? (
            <button
              className='header__mobile-button'
              onClick={() => {
                setMobileButtonOpen(false);
              }}
            >
              &#10005;
            </button>
          ) : (
            <button
              type='button'
              className={`header__mobile-button ${
                location.pathname === "/saved-news" &&
                "header__mobile-button_theme_dark"
              }`}
              onClick={() => {
                setMobileButtonOpen(true);
              }}
            >
              &#x268C;
            </button>
          )}

          <Navigation
            isMobileButtonOpen={isMobileButtonOpen}
            isSigninPopupOpen={isSigninPopupOpen}
            handleLogOut={handleLogOut}
          />
        </div>
      </div>

      {!currentPath.includes(`/saved-news`) ? (
        <HeaderWithSearch handleSearchQuery={handleSearchQuery} />
      ) : null}
    </header>
  );
}

export default Header;
