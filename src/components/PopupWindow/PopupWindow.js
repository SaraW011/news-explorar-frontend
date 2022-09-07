function PopupWindow(props) {
    return (
        <div className={`popup-window popup-window_open`}>
            {props.children}
            </div>
    );
}

export default PopupWindow;

