import PopupWithForm from "../PopupWithForm/PopupWithForm";
import useForm from "../../hooks/useForm";
import { signinForm } from "../../utils/formConfig";

function SigninForm(props) {
  const { isFormValid, renderFormInputs, form } = useForm(signinForm);

  function handleSubmit(event) {
    event.preventDefault();
    props.handleSigninSubmit({
      email: form.email.value,
      password: form.password.value,
    });
  }

  return (
    <PopupWithForm
      title={"Sign in"}
      linkTitle={"Sign up"}
      closePopup={props.closePopupHandler}
      switchFormBtn={props.switchForm}
      handleSubmit={handleSubmit}
    >
      {renderFormInputs()}

      <button
        className="popup__form-submit-btn"
        type="submit"
        aria-label="submit-button"
        disabled={!isFormValid()}
      >
        Sign in
      </button>
    </PopupWithForm>
  );
}

export default SigninForm;