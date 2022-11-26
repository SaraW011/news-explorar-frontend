import { useEffect } from "react";

function PopupWindow(props) {
  const { closePopup } = props;

  // ========>>>  CLOSE POPUP FUNCTIONALITY ========== //

  // `Escape` listener
  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        closePopup();
      }
    };

    document.addEventListener("keydown", closeByEscape);

    return () => document.removeEventListener("keydown", closeByEscape);
  }, [closePopup]);

  // `click out of popup` listener
  useEffect(() => {
    const closeByClick = (e) => {
      if (e.target.classList.contains("popup__form-backdrop_open")) {
        closePopup();
      }
    };

    document.addEventListener("click", closeByClick);

    return () => document.removeEventListener("click", closeByClick);
  }, [closePopup]);

  return (
    <div className={`popup__form-backdrop popup__form-backdrop_open`}>
      <div className='popup__form-container'>
        <button
          type='button'
          className='popup__form-close-button'
          aria-label='close-button'
          onClick={() => {
            props.closePopup(false);
          }}
        ></button>
        {props.children}
      </div>
    </div>
  );
}

export default PopupWindow;
