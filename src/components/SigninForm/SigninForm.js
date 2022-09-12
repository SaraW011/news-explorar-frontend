

import PopupWithForm from '../PopupWithForm/PopupWithForm';
function SigninForm(props) {

    return (
        <PopupWithForm
            title={'Sign in'}
            linkTitle={'Sign up'}
            buttonText={'Sign in'}
            closePopup={props.closePopupHandler}
            switchFormBtn={props.switchForm}           
        >
            <label className='popup__form-field-label'>
                Email
                <input
                    className='popup__form-input'
                    placeholder='Enter email'
                    type='email'
                    required
                    value={props.email}
                    onChange={props.setEmail}
                ></input>
                <p
                    className={
                        props.isEmailError
                            ? 'popup__form-input-err'
                            : 'popup__form-input-err popup__form-input-err_active'
                    }
                >
                    {props.isEmailErrorMsg}
                </p>
            </label>

            <label className='popup__form-field-label'>
                Password
                <input
                    className='popup__form-input'
                    placeholder='Enter password'
                    type='password'
                    value={props.password}
                    onChange={props.setPassword}
                    required
                ></input>
                <p
                    className={
                        props.isPasswordError
                            ? 'popup__form-input-err'
                            : 'popup__form-input-err popup__form-input-err_active'
                    }
                >
                    {props.isPasswordErrorMsg}
                </p>
            </label>
        </PopupWithForm>
    );
}

export default SigninForm;

