import { Link } from "react-router-dom";

import facebookLogo from "../../images/icon_facebook.svg";
import githubLogo from "../../images/icon_github.svg";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <p className="footer__copyright">
          &copy; {year} Supersite, Powered by News API
        </p>

        <Link to="/" className="footer__link footer__link-home">
          Home
        </Link>
        <a
          className="footer__link footer__link-practicum"
          href="https://practicum.com/en-isr/"
          target="_blank"
          rel="noreferrer"
        >
          Practicum
        </a>

        <a
          className="footer__link footer__github"
          href="https://github.com/practicum-student"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubLogo} alt="github logo" />
        </a>
        <a
          className="footer__link footer__facebook"
          href="https://www.facebook.com/Practicum100IL/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebookLogo} alt="facebook logo" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
