import React, { useState, useContext } from "react";
import { Router, Link, useLocation } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import SearchHeader from "../SearchHeader/SearchHeader";

import { AuthContext } from "../../contexts/AuthContext";

function Header(props) {
  // const loggedIn = useContext(AuthContext);
  const currentPath = window.location.pathname;
  const location = useLocation();

  const [isMobileButtonOpen, setMobileButtonOpen] = useState(false);

  return (
    <header
      className={
        location.pathname === "/saved-news"
          ? "header header_no-image"
          : "header header__main-page"
      }
    >
      <div
        className={
          isMobileButtonOpen 
          ?"header__wrapper header__wrapper_nav-open"
          : "header__wrapper" 
    
        }
      >
        <div className="header__items">
          <Link
            className={`${
              isMobileButtonOpen
                ? "header__logo"
                : location.pathname === "/saved-news"
                ? "header__logo header__logo_dark"
                : "header__logo"
            }`}
            to="/"
          >
            NewsExplorer
          </Link>

          {isMobileButtonOpen ? (
            <button
              className="header__mobile-button"
              onClick={() => {
                setMobileButtonOpen(false);
              }}
            >
              &#10005;
            </button>
          ) : (
            <button
              className={`header__mobile-button ${
                location.pathname === "/saved-news" &&
                "header__mobile-button_dark"
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
            isPopupOpen={props.isPopupOpen} 
          />
        </div>
      </div>

      {!currentPath.includes(`/saved-news`) ? <SearchHeader /> : null}
    </header>
  );
}

export default Header;
