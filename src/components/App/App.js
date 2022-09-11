import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// import { CurrentUserContext } from "../../contexts/CurrentUserContext";
// import { AuthContext } from "../../contexts/AuthContext";

import SigninForm from "../SigninForm/SigninForm";
import SignupForm from "../SignupForm/SignupForm";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";

function App() {
  // AUTH states
  // const [currentUser, setCurrentUser] = useState({});
  const [loggedIn] = useState(false);

  // POPUP visibility states:
  const [isSigninPopupOpen, setSigninPopupOpen] = useState(false);

  const [isSignupPopupOpen, setSignupPopupOpen] = useState(false);

  useEffect(() => {
    if (loggedIn) {
      Navigate("/");
    }
  }, [loggedIn]);

  function closeAllPopups() {
    setSigninPopupOpen(false);
    setSignupPopupOpen(false);
  }

  function handleLogin() {
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
  }

  return (
    <div className="App">
      {/* <CurrentUserContext.Provider value={currentUser}> */}
      {/* <AuthContext.Provider value={loggedIn}> */}

      {isSigninPopupOpen ? (
        <SigninForm
          closePopupHandler={closeAllPopups}
          switchForm={handleSignupPopupSwitch}
        />
      ) : (
        ""
      )}

      {isSignupPopupOpen ? (
        <SignupForm
          closePopupHandler={closeAllPopups}
          switchForm={handleSigninPopupSwitch}
        />
      ) : (
        ""
      )}

      <Header 
      isSigninPopupOpen={handleLogin} 
      onClose={closeAllPopups} />

      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/saved-news" element={<SavedNews />} />
      </Routes>

      <Footer />
      {/* </AuthContext.Provider> */}
      {/* </CurrentUserContext.Provider> */}
    </div>
  );
}

export default App;
