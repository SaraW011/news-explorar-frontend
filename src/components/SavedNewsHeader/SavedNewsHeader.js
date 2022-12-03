import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function SavedNewsHeader(props) {
  const { savedArticles } = props;

  const currentUser = useContext(CurrentUserContext);

  // get saved articles keyword list:
  let keywordsList = [];
  for (const list of savedArticles) {
    keywordsList.push(list.keyword);
    // console.log(list.keyword)
  }

  // count occurrence and by most
  const countKeywords = keywordsList.reduce((previous, current) => {
    previous[current] = (previous[current] || 0) + 1;
    return previous;
  }, {});

  // console.log(countKeywords);

  // sort keywords name:
  const sortKeywords = Object.keys(countKeywords).sort((a, b) => {
    return countKeywords[b] - countKeywords[a];
  });

  // name some keywords:
  const printKeywords =
    sortKeywords.length <= 2
      ? sortKeywords.slice(0, 3)
      : sortKeywords.slice(0, 2);
  const keywordsFound = printKeywords.join(", ");
  const num = sortKeywords.length - printKeywords.length;

  const noun =
    savedArticles.length >= 2 || savedArticles.length === 0
      ? "articles"
      : "article";

  return (
    <div className='sn-header'>
      <div className='sn-header__wrapper'>
        <h1 className='sn-header__headline'>Saved articles</h1>
        <h2 className='sn-header__info'>
          {currentUser.name}, you have {savedArticles.length} saved {noun}
        </h2>
        {savedArticles.length > 0 ? (
          <h3 className='sn-header__keywords'>
            {" "}
            By keywords:{" "}
            <span className='sn-header__keywords-found'>
              {keywordsFound} and {num} other
            </span>
          </h3>
        ) : null}
      </div>
    </div>
  );
}

export default SavedNewsHeader;
