import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

function NewsCard(props) {
  const {
    articles,
    savedArticles,
    handleDeleteArticle,
    handleSaveArticle,
    setSigninPopupOpen,
    showArticleSection,
  } = props;

  const loggedIn = useContext(AuthContext);

  const location = useLocation();
  const savedNesPage = location.pathname === "/saved-news";
  const mainPage = location.pathname === "/";

  const [savedCard, setSavedCard] = useState(false);

  const [onMouseHover, setOnMouseHover] = useState(false);
  const [, setShowMessage] = useState(true);

  //get date format of design i.e.: "November 4, 2020"
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date(articles.date);
  const publishedAt =
    months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();

  function handleMouseOver() {
    setOnMouseHover(true);
    setShowMessage(true);
  }

  function handleMouseLeave() {
    setOnMouseHover(false);
    setShowMessage(false);
  }

  // keep saved article marked as saved:
  useEffect(() => {
    if (loggedIn) {
      savedArticles.forEach((element) => {
        if (element.title === articles.title) {
          setSavedCard(true);
        }
      });
    }
  }, [loggedIn, articles.title, savedArticles]);

  async function handleSaveClick() {
    try {
      if (loggedIn && !savedCard) {
        await handleSaveArticle(articles);
        setSavedCard(true);
      }
      if (!loggedIn) {
        setSigninPopupOpen(true);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDeleteClick() {
    try {
      savedArticles.forEach((article) => {
        if (article._id === articles._id) {
          handleDeleteArticle(article);
          setSavedCard(false);
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    showArticleSection && (
      <>
        <li className='news-card'>
          <button
            className={`${
              savedNesPage
                ? `news-card__button news-card__button-trash`
                : `news-card__button news-card__button-bookmark `
            } ${
              mainPage
                ? `news-card__button news-card__button-bookmark ${
                    savedCard && "news-card__button-bookmark_active"
                  }`
                : `news-card__button-bookmark_nohover`
            }`}
            aria-label='card take-action button'
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            onClick={mainPage ? handleSaveClick : handleDeleteClick}
          ></button>

          {savedNesPage && (
            <button
              className='news-card__button news-card__button-keyword'
              aria-label='article keyword'
            >
              {articles.keyword}
            </button>
          )}

          {!loggedIn ? (
            <p
              className={`news-card__message ${
                onMouseHover ? "news-card__message_visible" : ""
              }`}
            >
              {" "}
              Sign in to save articles
            </p>
          ) : (
            savedNesPage && (
              <p
                className={`news-card__message ${
                  onMouseHover ? "news-card__message_visible" : ""
                }`}
              >
                {" "}
                Remove from saved
              </p>
            )
          )}

          <a href={articles.link} target='_blank' rel='noreferrer'>
            <img
              className='news-card__image'
              src={articles.image}
              alt={articles.title}
            />
          </a>
          <div className='news-card__info'>
            <h2 className='news-card__date'>{publishedAt}</h2>
            <h3 className='news-card__title'>{articles.title}</h3>
            <p className='news-card__paragraph'>{articles.text}</p>
            <h4 className='news-card__source'>{articles.source}</h4>
          </div>
        </li>
      </>
    )
  );
}

export default NewsCard;
