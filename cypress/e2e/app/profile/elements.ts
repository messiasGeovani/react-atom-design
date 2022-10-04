import { extractIdentifier } from "cypress/support/utils";

const block = "UserForm";

const elements = {
  profileImg: extractIdentifier({
    block,
    element: "profile img",
  }) as string,
  firstNameInput: extractIdentifier({
    block,
    element: "first name input",
  }) as string,
  lastNameInput: extractIdentifier({
    block,
    element: "last name input",
  }) as string,
  emailInput: extractIdentifier({
    block,
    element: "email input",
  }) as string,
  passwordInput: extractIdentifier({
    block,
    element: "password input",
  }) as string,
  cancelButton: extractIdentifier({
    block,
    element: "cancel button",
  }) as string,
};

export default elements;
