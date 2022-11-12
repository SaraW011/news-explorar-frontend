import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import NewsCard from "../NewsCard/NewsCard";
import defaultImage from "../../images/no-image.png";

function NewsCardList(props) {
  const {
    searchedArticles,
    savedArticles,
    handleSaveArticle,
    handleDeleteArticle,
    setSigninPopupOpen,
    showArticleSection,
  } = props;

  const location = useLocation();

  const [initialCards, setInitialCards] = useState(3);
  let key = 0;

  //keep cards mounted on page refresh:
  useEffect(() => {
    setInitialCards(localStorage.getItem("card-count"));
  }, [searchedArticles]);

  function showMoreClick() {
    if (initialCards < searchedArticles.length) {
      localStorage.setItem("card-count", parseInt(initialCards) + 3);
      setInitialCards(localStorage.getItem("card-count"));
    }
  }

  return (
    showArticleSection && (
      <section className='cards-list'>
        <div className='cards-list__wrapper'>
          {location.pathname === "/" ? (
            <h2 className='cards-list__heading'>Search Results</h2>
          ) : null}
          <ul className='cards-list__container'>
            {location.pathname === "/"
              ? searchedArticles.slice(0, initialCards).map((articles) => {
                  return (
                    <NewsCard
                      key={key++}
                      articles={{
                        keyword: localStorage.getItem("keyword"),
                        image:
                          articles.urlToImage ||
                          defaultImage ||
                          articles.urlToImage.attach,
                        date: articles.publishedAt,
                        title: articles.title,
                        text: articles.content,
                        link: articles.url,
                        source: articles.source.name,
                      }}
                      searchedArticles={searchedArticles}
                      handleSaveArticle={handleSaveArticle}
                      savedArticles={savedArticles}
                      handleDeleteArticle={handleDeleteArticle}
                      setSigninPopupOpen={setSigninPopupOpen}
                      showArticleSection={showArticleSection}
                    />
                  );
                })
              : savedArticles.map((articles) => {
                  return (
                    <NewsCard
                      key={key++}
                      articles={articles}
                      searchedArticles={searchedArticles}
                      savedArticles={savedArticles}
                      handleDeleteArticle={handleDeleteArticle}
                      showArticleSection={showArticleSection}
                    />
                  );
                })}
          </ul>
        </div>
        {location.pathname === "/" ? (
          <button className='cards-list__btn' onClick={showMoreClick}>
            Show more
          </button>
        ) : null}
      </section>
    )
  );
}

export default NewsCardList;
