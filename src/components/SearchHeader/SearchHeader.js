import SearchForm from "../SearchForm/SearchForm";


function SearchHeader() {

  return (
      
    <div className= "search-header__info-wrapper">
      <h1 className="search-header__title">What's going on in the world?</h1>
      <h2 className="search-header__subtitle">  Find the latest news on any topic and save them in your personal
            account.</h2>
   
   <SearchForm/>
   </div>    

  );
}

export default SearchHeader;
