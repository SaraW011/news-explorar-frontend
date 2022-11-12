import sadFace from "../../images/icon_not-found.svg";

function NotFound() {
  return ( 
    <section className="not-found">
      <img className="not-found__image" 
      src={sadFace} 
      alt="not found">
      </img>
      <h3 className="not-found__title">Nothing Found</h3>
      <p className="not-found__text">
        Sorry, but nothing matched your search terms.
      </p>
    </section>
  );
}

export default NotFound;
