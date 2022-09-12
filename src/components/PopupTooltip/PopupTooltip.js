import { useState } from "react";
import PopupWindow from "../PopupWindow/PopupWindow";

function PopupTooltip() {

  const [isSigninPopupOpen, setSigninPopupOpen] = useState();


  return (
    <PopupWindow
      isSigninPopupOpen ={isSigninPopupOpen}    
        >
          
      <div className="tooltip">
        <button
          className="tooltip__btn-close"
          onClick = {()=>{setSigninPopupOpen(!isSigninPopupOpen)}}
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