// // for later work...

// import React, { useCallback, useEffect, useState, useContext } from "react";
//   import PopupWindow from "../components/PopupWindow/PopupWindow";

// const PopupContext = React.createContext();

// export function usePopupContext() {
//   return useContext(PopupContext);
// }

// export function PopupProvider(props){  
//   const [isPopup, openPopup] = useState(true);
//   const closePopup = useCallback(() => {
//     openPopup();
//   }, [openPopup]);

// const EscapeClosePopup = ({ isPopup, closePopup }) => {
//   useEffect(() => {
//     const bind = (e) => {
//       if (e.keyCode !== 27) {
//         return;
//       }

//       if (
//         document.activeElement &&
//         ["INPUT", "SELECT"].includes(document.activeElement.tagName)
//       ) {
//         return;
//       } 

//       closePopup();
//     };

//     document.addEventListener("keyup", bind);
//     return () => document.removeEventListener("keyup", bind);
//   }, [isPopup, closePopup]);
// }

//   return (
//     <PopupContext.Provider value={{closePopup, openPopup }}  {...props}>
//       {props.children}
//     </PopupContext.Provider>
//   );
// };