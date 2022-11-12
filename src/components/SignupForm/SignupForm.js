import PopupWithForm from "../PopupWithForm/PopupWithForm";
import useForm from "../../hooks/useForm";
import { signupForm } from "../../utils/formConfig";

function SignupForm(props) {

  const { renderFormInputs, isFormValid, form } = useForm(signupForm);

  function handleSubmit(event) {
    event.preventDefault();
      props.handleSignupSubmit({
        email: form.email.value,
        password: form.password.value,
        name: form.name.value,
      });
  }

  return (
    <PopupWithForm
      title={"Sign up"}
      linkTitle={"Sign in"}
      closePopup={props.closePopupHandler}
      switchFormBtn={props.switchForm}
      handleSubmit={handleSubmit}
    >
      {renderFormInputs()}

      {props.conflictErr && <div className="popup__form-email-conflict">
        This email is not available
      </div>}

      <button
        className="popup__form-submit-btn"
        type="submit"
        aria-label="submit-button"
        disabled={!isFormValid()}
      >
        Sign up
      </button>
    </PopupWithForm>
  );
}

export default SignupForm;
