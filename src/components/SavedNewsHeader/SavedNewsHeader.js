function SavedNewsHeader() {
  return (
    <div className={"sn-header"}>
      <div className="sn-header__wrapper">
        <h1 className="sn-header__headline">Saved articles</h1>
        <h2 className="sn-header__info">Elsie, you have 5 saved articles</h2>
        <h3 className="sn-header__keywords">
          {" "}
          By keywords:{" "}
          <span className="sn-header__keywords-found">
            Nature, Yellowstone, and 2 other
          </span>
        </h3>
      </div>
    </div>
  );
}

export default SavedNewsHeader;
