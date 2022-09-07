import NewsCardList from "../NewsCardList/NewsCardList";
import Header from "../Header/Header"
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
