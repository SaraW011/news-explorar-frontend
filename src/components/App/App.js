/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { AuthContext } from "../../contexts/AuthContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import SigninForm from "../SigninForm/SigninForm";
import SignupForm from "../SignupForm/SignupForm";
import PopupTooltip from "../PopupTooltip/PopupTooltip";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import mainApi from "../../utils/MainApi";
import { getNewsApi } from "../../utils/NewsApi";

function App() {
  // AUTH states
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [conflictErr, setConflictErr] = useState(false);

  // POPUP visibility states:
  const [isSigninPopupOpen, setSigninPopupOpen] = useState(false);
  const [isSignupPopupOpen, setSignupPopupOpen] = useState(false);
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  // NEWS states:
  const [preloader, setPreloader] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [showArticleSection, setShowArticleSection] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);
  const [searchedArticles, setSearchedArticles] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  //*** USER FUNCTIONS ***=================================

  // signup:
  async function handleSignupSubmit(data) {
    try {
      const userData = await mainApi.signup(data);
      if (userData) {
        console.log("one moment... your accont is beeing created ❥")
        setIsTooltipOpen(true);
        console.log("Sign Up Data:", data);
        // console.log("Sign Up currentUser is:", currentUser);
        console.log(userData.name, "you are now a special member");
        setSignupPopupOpen(false);
      }
    } catch (err) {
      console.log(err, err.response, err.status);
      if (err) {
        setConflictErr(true);
        setTimeout(function () {
          setConflictErr(false);
        }, 2000);
      }
    }
  }

  // login:
  async function handleSigninSubmit(data) {
    try {
      //mainApi sets up the "jwt" token:
      const token = await mainApi.signin(data);
      if (token) {
        setLoggedIn(true);
        navigate("/", { replace: true });
        setSigninPopupOpen(false);
        navigate(0);
      }
    } catch (res) {
      window.alert("You have entered an invalid username or password");
      return;
    }
  }

  // keep user logged in when token is set:
  useEffect(() => {
    (async () => {
      try {
        const user = await mainApi.checkToken(
          // ".value" prevents 500 error when logged out:
          localStorage.getItem("jwt").value
        );
        if (user) {
          setCurrentUser({ name: user.name });
          setLoggedIn(true);
          mainApi.getUserInfo();
          // console.log(user.name);
        }
      } catch {
        return;
      }
    })();
  }, [loggedIn]);

  // logout:
  function handleLogOut() {
    localStorage.removeItem("jwt");
    localStorage.removeItem("keyword");
    localStorage.removeItem("articles");
    setLoggedIn(false);
    navigate("/");
    setShowArticleSection(false);
  }


  // ======== ***  CARDS FUNCTIONALITY ==========//

  // search for news by keyword
  async function handleSearchQuery(event, topic) {
    try {
      event.preventDefault();
      setPreloader(true);
      console.log(topic);
      let searchRes = await getNewsApi(topic);
      if (searchRes.articles.length === 0) {
        setNotFound(true);
        localStorage.removeItem("keyword");
        setShowArticleSection(false);
      }
      if (searchRes.articles.length !== 0) {
        //close if prev not found is true:
        setNotFound(false);
        setPreloader(false);
        setSearchedArticles(searchRes.articles);
        setShowArticleSection(true);
        //set local value for card count:
        localStorage.setItem("card-count", 3);
        console.log(searchRes);
        //store cards locally:
        localStorage.setItem("articles", JSON.stringify(searchRes.articles));
      }
    } catch (err) {
      localStorage.removeItem("articles");
      alert("The search has failed.");
      console.log("Search query error:", err);
    } finally {
      setPreloader(false);
    }
  }

  // save article by user
  async function handleSaveArticle(article) {
    try {
      mainApi.saveArticle(article);
      const userArticles = await mainApi.getSavedArticles();
      if (userArticles) {
        setSavedArticles(userArticles);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDeleteArticle(article) {
    try {
      await mainApi.deleteSavedArticle(article);
      // console.log(article);
      const userArticles = await mainApi.getSavedArticles();
      if (userArticles) {
        setSavedArticles(userArticles);
      }
    } catch (err) {
      console.log(err);
      setSavedArticles([]);
    }
  }

  // get user's saved articles:
  useEffect(() => {
    if (location.pathname === "/saved-news") {
      setShowArticleSection(true);
    } else if (!localStorage.getItem("articles")) {
      setShowArticleSection(false);
    }
    const token = localStorage.getItem("jwt");
    if (token) {
      mainApi
        .getSavedArticles()
        .then((res) => {
          setSavedArticles(res);
        })
        .catch(console.log);
    }
  }, [location.pathname]);

  // keep last search results live:
  useEffect(() => {
    if (localStorage.getItem("articles")) {
      setShowArticleSection(true);
    }
    setSearchedArticles(JSON.parse(localStorage.getItem("articles")) || []);
  }, []);

  // ======== *** MODALS FUNCTIONALITY ==========//
  function closeAllPopups() {
    setSigninPopupOpen(false);
    setSignupPopupOpen(false);
    setPreloader(false);
    setIsTooltipOpen(false);
  }

  function handleLoginPopup() {
    setSigninPopupOpen(true);
  }

  function handleSignupPopupSwitch(evt) {
    evt.preventDefault();
    closeAllPopups();
    setSignupPopupOpen(true);
  }

  function handleSigninPopupSwitch(evt) {
    evt.preventDefault();
    closeAllPopups();
    setSigninPopupOpen(true);
    setIsTooltipOpen(false);
  }

  // redirect to login page if protected route is true:
  useEffect(() => {
    if (!loggedIn && location.pathname === "/saved-news") {
      navigate("/")
      setSigninPopupOpen(true)
    }
  }, [loggedIn, location.pathname, navigate]);

  return (
    <div className='App'>
      <CurrentUserContext.Provider value={currentUser}>
        <AuthContext.Provider value={loggedIn}>
          {isSigninPopupOpen ? (
            <SigninForm
              handleSigninSubmit={handleSigninSubmit}
              closePopupHandler={closeAllPopups}
              switchForm={handleSignupPopupSwitch}
            />
          ) : null}

          {isSignupPopupOpen ? (
            <SignupForm
              handleSignupSubmit={handleSignupSubmit}
              closePopupHandler={closeAllPopups}
              switchForm={handleSigninPopupSwitch}
              conflictErr={conflictErr}
            />
          ) : null}

          {isTooltipOpen ? (
            <PopupTooltip
              closePopupHandler={closeAllPopups}
              onSigninClick={handleSigninPopupSwitch}
            />
          ) : null}

          <Header
            isSigninPopupOpen={handleLoginPopup}
            onClose={closeAllPopups}
            handleLogOut={handleLogOut}
            handleSearchQuery={handleSearchQuery}
            savedArticles={savedArticles}
          />

          <Routes>
            <Route
              exact
              path='/'
              element={
                <Main
                  handleSaveArticle={handleSaveArticle}
                  handleDeleteArticle={handleDeleteArticle}
                  preloader={preloader}
                  searchedArticles={searchedArticles}
                  notFound={notFound}
                  savedArticles={savedArticles}
                  setSigninPopupOpen={setSigninPopupOpen}
                  showArticleSection={showArticleSection}
                />
              }
            />
            <Route
              path='/saved-news'
              element={
                <ProtectedRoute>
                  <SavedNews
                    searchedArticles={searchedArticles}
                    savedArticles={savedArticles}
                    handleDeleteArticle={handleDeleteArticle}
                    showArticleSection={showArticleSection}
                  />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </AuthContext.Provider>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
