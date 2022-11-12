import PopupWindow from "../PopupWindow/PopupWindow";

function PopupTooltip(props) {
  return (
    <PopupWindow>
      <div className="popup__tooltip">
        <button
          type="button"
          className="popup__tooltip-btn-close"
          aria-label="close-button"
          onClick={props.closePopupHandler}
        >
          &#10005;
        </button>
        <h2 className="popup__tooltip-title ">
          Registration successfully completed!
        </h2>
        <button 
          className="popup__tooltip-switch-form" 
          onClick={props.onSigninClick}>
          Sign in
        </button>
      </div>
    </PopupWindow>
  );
}

export default PopupTooltip;
