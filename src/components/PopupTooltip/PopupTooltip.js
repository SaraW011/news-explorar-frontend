import PopupWindow from "../PopupWindow/PopupWindow";

function PopupTooltip(props) {
  return (
    <PopupWindow 
    closePopup={props.closePopupHandler}>
      <div className='popup__tooltip'>
        <h2 className='popup__tooltip-title '>
          Registration successfully completed!
        </h2>
        <button
          className='popup__tooltip-switch-form'
          onClick={props.onSigninClick}
        >
          Sign in
        </button>
      </div>
    </PopupWindow>
  );
}

export default PopupTooltip;
