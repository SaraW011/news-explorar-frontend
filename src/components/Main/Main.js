import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import NotFound from "../NotFound/NotFound";
import Preloader from "../Preloader/Preloader";

function Main({
  searchedArticles,
  savedArticles,
  handleSaveArticle,
  handleDeleteArticle,
  preloader,
  notFound,
  setSigninPopupOpen,
  showArticleSection
}) {
  return (
    <main className='main'>
      <section className={"main__content"}></section>

      {notFound && <NotFound />}
      {preloader && <Preloader />}
      <NewsCardList
        searchedArticles={searchedArticles}
        savedArticles={savedArticles}
        handleSaveArticle={handleSaveArticle}
        handleDeleteArticle={handleDeleteArticle}
        setSigninPopupOpen={setSigninPopupOpen}
        showArticleSection={showArticleSection}
      />

      <About />
    </main>
  );
}

export default Main;
