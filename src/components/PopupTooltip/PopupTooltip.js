import { useState } from "react";
import PopupWindow from "../PopupWindow/PopupWindow";

function PopupTooltip() {

  const [isPopupOpen, setIsPopupOpen] = useState();


  return (
    <PopupWindow
      isPopupOpen ={isPopupOpen}    
        >
          
      <div className="tooltip">
        <button
          className="tooltip__btn-close"
          onClick = {()=>{setIsPopupOpen(!isPopupOpen)}}
          >
          &#10005;
        </button>
        <h2 className=" tooltip__title ">
          Registration successfully completed!
        </h2>
        <p className="tooltip__link">Sign in</p>
      </div>
    </PopupWindow>
  );
}

export default PopupTooltip;