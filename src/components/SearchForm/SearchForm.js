function SearchForm() {
  return (
    <div className="header__search-form">
      <form className="header__search-input">
        <input
          name="search-input"
          className="header__search-input-field"
          type="text"
          placeholder="Enter topic"
          required
        />

        <button className="header__search-button"
         type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
