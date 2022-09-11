function SavedNewsHeader() {
  return (
    <div className={"sn-header"}>
      <div className="sn-header__wrapper">
        <h2 className="sn-header__headline">Saved articles</h2>
        <h3 className="sn-header__info">Elsie, you have 5 saved articles</h3>
        <h4 className="sn-header__keywords">
          {" "}
          By keywords:{" "}
          <span className="sn-header__keywords_span-accent">
            Nature, Yellowstone, and 2 other
          </span>
        </h4>
      </div>
    </div>
  );
}

export default SavedNewsHeader;
