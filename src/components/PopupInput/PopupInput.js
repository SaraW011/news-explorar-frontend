import React from "react";

function PopupInput(props) {
  const {
    label,
    type,
    name,
    handleChange,
    errorMessage,
    isValid,
    value,
  } = props;

  return (
    <label className='popup__form-input-field-label'>
      {label}
      <input
        className='popup__form-input'
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={`Enter ${name}`}
      />
      {errorMessage && !isValid && (
        <p className={"popup__form-input-err popup__form-input-err_active"}>
          {errorMessage}
        </p>
      )}
    </label>
  );
}

export default React.memo(PopupInput);
