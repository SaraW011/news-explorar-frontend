function PopupWindow(props) {

  return (
    <div className={`popup__form-backdrop popup__form-backdrop_open`}>
      {props.children}
    </div>
  );
}

export default PopupWindow;
