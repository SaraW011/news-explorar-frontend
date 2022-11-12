import NewsCardList from "../NewsCardList/NewsCardList";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";

function SavedNews(props) {
  const { savedArticles, searchedArticles, handleDeleteArticle, showArticleSection } = props;

  return (
    <main className='main'>
      <SavedNewsHeader
        savedArticles={savedArticles}
        searchedArticles={searchedArticles}
      />
      <NewsCardList
        savedArticles={savedArticles}
        searchedArticles={searchedArticles}
        handleDeleteArticle={handleDeleteArticle}
        showArticleSection={showArticleSection}
      />
    </main>
  );
}

export default SavedNews;
