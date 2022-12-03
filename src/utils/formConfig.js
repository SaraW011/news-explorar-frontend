//credit: academind
import React from "react";
import PopupInput from "../components/PopupInput/PopupInput";

import {
  requiredRule,
  minLengthRule,
  maxLengthRule,
  //   passwordMatchRule
} from "./inputValidationRules";

/**
 * creates and returns object representation of form field
 *
 * @param {string} label - label to show with the form input
 * @param {string} name - input name
 * @param {string} type - input type
 * @param {string} defaultValue - default value for the input

 */
function createFormFieldConfig(label, name, type, defaultValue = "",) {
  return {
    renderInput: (handleChange, value, isValid, error, key) => {
      return (
        <PopupInput
          key={key}
          name={name}
          type={type}
          label={label}
          isValid={isValid}
          value={value}
          handleChange={handleChange}
          errorMessage={error}
        />
      );
    },
    label,
    value: defaultValue,
    valid: false,
    errorMessage: "",
    touched: false,
  };
}

// object representation of signup form
export const signupForm = {
  email: {
    ...createFormFieldConfig("Email", "email", "email",),
    validationRules: [
      requiredRule("email"),
      minLengthRule("email", 5),
      maxLengthRule("email", 25),
    ],
  },
  password: {
    ...createFormFieldConfig("Password", "password", "password",),
    validationRules: [
      requiredRule("password"),
      minLengthRule("password", 3),
      maxLengthRule("password", 20),
    ],
  },
  name: {
    ...createFormFieldConfig("Username", "name", "text"),
    validationRules: [
      requiredRule("name"),
      minLengthRule("username", 2),
      maxLengthRule("username", 7),
    ],
  },
};

// object representation of signin form
export const signinForm = {
  email: {
    ...createFormFieldConfig("Email", "email", "email"),
    validationRules: [
      requiredRule("email"),
      minLengthRule("email", 5),
      maxLengthRule("email", 25),
    ],
  },
  password: {
    ...createFormFieldConfig("Password", "password", "password"),
    validationRules: [
      requiredRule("password"),
      minLengthRule("password", 3),
      maxLengthRule("password", 20),
    ],
  },
};
