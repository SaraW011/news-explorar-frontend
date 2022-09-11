import cardImage from "../../images/card1.png";
import cardImage2 from "../../images/card2.png";
import cardImage3 from "../../images/card3.png";
import cardImage4 from "../../images/card4.png";
import cardImage5 from "../../images/card5.png";

function NewsCard() {
  return (
    <>
      <li className="news-card">
        <button
          className="news-card__button news-card__button-bookmark"
          aria-label="bookmark card"
        ></button>

        <button
          className="news-card__button news-card__button-keyword"
          aria-label="article keyword"
        >
          keyword
        </button>

        <p className="news-card__message"> Sign in to save articles</p>

        <img className="news-card__image" src={cardImage} alt="article pic" />

        <div className="news-card__info">
          <h2 className="news-card__date">November 4, 2020</h2>
          <h3 className="news-card__title">
            Everyone Needs a Special 'Sit Spot' in Nature
          </h3>
          <p className="news-card__paragraph">
            Ever since I read Richard Louv's influential book, "Last Child in
            the Woods," the idea of having a special "sit spot" has stuck with
            me. This advice, which Louv attributes to nature educator Jon Young,
            is for both adults and children to find{" "}
          </p>
          <h4 className="news-card__source">treehugger</h4>
        </div>
      </li>

      <li className="news-card">
        <button
          className="news-card__button news-card__button-bookmark"
          aria-label="bookmark card"
        ></button>

        <button
          className="news-card__button news-card__button-keyword"
          aria-label="article keyword"
        >
          keyword
        </button>

        <p className="news-card__message"> Sign in to save articles</p>

        <img className="news-card__image" src={cardImage2} alt="article pic" />

        <div className="news-card__info">
          <h2 className="news-card__date">February 19, 2019</h2>
          <h3 className="news-card__title">Nature makes you better</h3>
          <p className="news-card__paragraph">
            We all know how good nature can make us feel. We have known it for
            millennia: the sound of the ocean, the scents of a forest, the way
            dappled sunlight dances through leaves.
          </p>
          <h4 className="news-card__source">national geographic</h4>
        </div>
      </li>

      <li className="news-card">
        <button
          className="news-card__button news-card__button-bookmark"
          aria-label="bookmark card"
        ></button>

        <button
          className="news-card__button news-card__button-keyword"
          aria-label="article keyword"
        >
          keyword
        </button>

        <p className="news-card__message"> Sign in to save articles</p>

        <img className="news-card__image" src={cardImage3} alt="article pic" />

        <div className="news-card__info">
          <h2 className="news-card__date">October 19, 2020</h2>
          <h3 className="news-card__title">
            Nostalgic Photos of Tourists in U.S. National Parks
          </h3>
          <p className="news-card__paragraph">
            Uri Løvevild Golman and Helle Løvevild Golman are National
            Geographic Explorers and conservation photographers who just
            completed a project and book they call their love letter to
          </p>
          <h4 className="news-card__source">national geographic</h4>
        </div>
      </li>

      <li className="news-card">
        <button
          className="news-card__button news-card__button-bookmark"
          aria-label="bookmark card"
        ></button>

        <button
          className="news-card__button news-card__button-keyword"
          aria-label="article keyword"
        >
          keyword
        </button>

        <p className="news-card__message"> Sign in to save articles</p>

        <img className="news-card__image" src={cardImage4} alt="article pic" />

        <div className="news-card__info">
          <h2 className="news-card__date">November 4, 2020</h2>
          <h3 className="news-card__title">
            Grand Teton Renews Historic Crest Trail
          </h3>
          <p className="news-card__paragraph">
            “The linking together of the Cascade and Death Canyon trails, at
            their heads, took place on October 1, 1933, and marked the first
            step in the realization of a plan whereby the hiker will be{" "}
          </p>
          <h4 className="news-card__source">National parks traveler</h4>
        </div>
      </li>

      <li className="news-card">
        <button
          className="news-card__button news-card__button-bookmark"
          aria-label="bookmark card"
        ></button>

        <button
          className="news-card__button news-card__button-keyword"
          aria-label="article keyword"
        >
          photography
        </button>

        <p className="news-card__message"> Sign in to save articles</p>

        <img className="news-card__image" src={cardImage5} alt="article pic" />

        <div className="news-card__info">
          <h2 className="news-card__date">March 16, 2020</h2>
          <h3 className="news-card__title">
            Scientists Don't Know Why Polaris Is So Weird
          </h3>
          <p className="news-card__paragraph">
            Humans have long relied on the starry sky to push into new
            frontiers, sail to the very edge of the world and find their way
            back home again. Even animals look to the stars to guide them.{" "}
          </p>
          <h4 className="news-card__source">treehugger</h4>
        </div>
      </li>
    </>
  );
}

export default NewsCard;
