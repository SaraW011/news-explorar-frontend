import PopupWindow from "../PopupWindow/PopupWindow";

function PopupWithForm(props) {

  return (
    <PopupWindow 
    closePopup={props.closePopup}>
      <form className='popup__form' onSubmit={props.handleSubmit}>
        <h2 className='popup__form-title'>{props.title}</h2>

        {/* SignupForm / LoginForm */}

        {props.children}

        <p className='popup__form-text'>
          or{" "}
          <button
            className='popup__form-alternate'
            onClick={props.switchFormBtn}
          >
            {props.linkTitle}
          </button>
        </p>
      </form>
    </PopupWindow>
  );
}

export default PopupWithForm;
