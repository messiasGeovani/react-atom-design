import { createTestAttribute } from "@/utils";

const block = "UserForm";

const testAttrs = {
  profileImg: createTestAttribute({
    block,
    element: "profile img",
  }),
  firstNameInput: createTestAttribute({
    block,
    element: "first name input",
  }),
  lastNameInput: createTestAttribute({
    block,
    element: "last name input",
  }),
  emailInput: createTestAttribute({
    block,
    element: "email input",
  }),
  passwordInput: createTestAttribute({
    block,
    element: "password input",
  }),
  cancelButton: createTestAttribute({
    block,
    element: "cancel button",
  }),
};

export default testAttrs;
