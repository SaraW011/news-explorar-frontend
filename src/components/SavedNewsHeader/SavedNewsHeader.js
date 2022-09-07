function SavedNewsHeader() {
  return (
    <div className={"sn-header"}>
      <div className="sn-header__wrapper">
        <div className="sn-header__headline">Saved articles</div>
        <div className="sn-header__info">Elsie, you have 5 saved articles</div>
        <div className="sn-header__keywords">
          {" "}
          By keywords:{" "}
          <span className="sn-header__keywords_bold">
            Nature, Yellowstone, and 2 other
          </span>
        </div>
      </div>
    </div>
  );
}

export default SavedNewsHeader;
