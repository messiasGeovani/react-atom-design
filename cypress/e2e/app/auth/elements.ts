import { extractIdentifier } from "../../../support/utils";

const block = "AuthForm";

const elements = {
  link: extractIdentifier({
    block,
    element: "link",
  }) as string,
  emailInput: extractIdentifier({
    block,
    element: "email input",
  }) as string,
  passwordInput: extractIdentifier({
    block,
    element: "password input",
  }) as string,
  confirmPasswordInput: extractIdentifier({
    block,
    element: "confirm password input",
  }) as string,
  accepTermsCheckbox: extractIdentifier({
    block,
    element: "accept terms checkbox",
  }) as string,
  submitButton: "button[type='submit']",
};

export default elements;
