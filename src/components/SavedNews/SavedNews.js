import NewsCardList from "../NewsCardList/NewsCardList";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader"

function SavedNews() {
  
  return (
    <main className="main">
     <SavedNewsHeader /> 
      <NewsCardList />
    </main>

  );
}

export default SavedNews;
