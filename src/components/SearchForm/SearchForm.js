import { useState } from "react";

function SearchForm({ handleSearchQuery }) {
  const [keyword, setKeyword] = useState("");

  function handleKeywordChange(event) {
    event.preventDefault();
    const searchValue = event.target.value.toLowerCase();
    setKeyword(searchValue);
    localStorage.setItem("keyword", searchValue);
  }

  return (
    <div className='header__search-form'>
      <form
        className='header__search-input'
        onSubmit={(event) => {
          handleSearchQuery(event, keyword);
        }}
      >
        <input
          name='search-input'
          className='header__search-input-field'
          type='text'
          placeholder='Enter topic'
          required
          value={keyword}
          onChange={handleKeywordChange}
        />

        <button className='header__search-button' type='submit'>
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
