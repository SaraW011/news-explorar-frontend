import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// import { CurrentUserContext } from "../../contexts/CurrentUserContext";
// import { AuthContext } from "../../contexts/AuthContext";
// import { PopupProvider } from "../../contexts/PopupContext";

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SavedNews from '../SavedNews/SavedNews';
import SigninForm from '../SigninForm/SigninForm';

function App() {
    // AUTH states
    // const [currentUser, setCurrentUser] = useState({});
    const [loggedIn, ] = useState(false);

    // POPUP visibility states:
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    useEffect(() => {
        if (loggedIn) {
            Navigate('/');
        }
    }, [loggedIn]);

    function closeAllPopups() {
        setIsPopupOpen(false);
    }

    function handleLogin() {
        setIsPopupOpen(true);
    }

    return (
        <div className='App'>
            {/* <CurrentUserContext.Provider value={currentUser}> */}
            {/* <AuthContext.Provider value={loggedIn}> */}

            {/* <PopupProvider> */}
            {isPopupOpen ? (
                <SigninForm 
                closePopupHandler={closeAllPopups} 
                />
            ) : (
                ''
            )}

            {/* </PopupProvider> */}

            <Header isPopupOpen={handleLogin} onClose={closeAllPopups} />

            <Routes>
                <Route path='/' element={<Main />} />

                <Route path='/saved-news' element={<SavedNews />} />
            </Routes>

            <Footer />
            {/* </AuthContext.Provider> */}
            {/* </CurrentUserContext.Provider> */}
        </div>
    );
}

export default App;

