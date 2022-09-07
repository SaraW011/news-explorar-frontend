import PopupWindow from "../PopupWindow/PopupWindow";

// import { usePopupContext } from "../../contexts/PopupContext";

function PopupWithForm(props) {
  return (
    <PopupWindow>
      <div className="popup__form-container">
        <button
          type="button"
          className="popup__form__btn-close"
          aria-label="close-button"
          onClick={() => {
            props.closePopup(false);
          }}
        ></button>

        <form className="popup__form">
          <h2 className="popup__form-title">{props.title}</h2>

          {/* SignupForm / LoginForm */}

          {props.children}

          <button
            className={
              props.isRegistered
                ? "popup__form-submit-btn"
                : "popup__form-submit-btn popup__form-submit-btn_disabled"
            }
            type="submit"
          >
            {props.buttonText}
          </button>

          <p className="popup__form-text">
            or{" "}
            <span className="popup__form-link"
            //  onClick={
            //  }
             >
              {props.linkTitle}
             
            </span>
          </p>
        </form>
      </div>
    </PopupWindow>
  );
}

export default PopupWithForm;
