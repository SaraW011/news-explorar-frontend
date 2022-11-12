import SearchForm from "../SearchForm/SearchForm";

function HeaderWithSearch({ handleSearchQuery }) {
  return (
    <div className='header__search-info-wrapper'>
      <h1 className='header__search-title'>What's going on in the world?</h1>
      <h2 className='header__search-subtitle'>
        {" "}
        Find the latest news on any topic and save them in your personal
        account.
      </h2>

      <SearchForm handleSearchQuery={handleSearchQuery} />
    </div>
  );
}

export default HeaderWithSearch;
