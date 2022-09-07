function SearchForm() {
  return (
    <div className="search__form">
      <form className="search__input">
        <input
          name="search-input"
          className="search__input-field"
          type="text"
          placeholder="Enter topic"
          required
        />

        <button className="search__button"
         type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
