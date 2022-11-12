function Preloader(props) {
  return (
    <div className="preloader__frame">
      <i className={`preloader ${props.preloader && "preloader_active"}`}></i>
      <div className="preloader__message">Searching for news...</div>
    </div>
  );
}

export default Preloader;
