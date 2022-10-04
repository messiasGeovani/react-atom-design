import { createTestAttribute } from "@/utils";

const block = "AuthForm";

const testAttrs = {
  alternateForm: createTestAttribute({
    block,
    element: "link",
  }),
  emailInput: createTestAttribute({
    block,
    element: "email input",
  }),
  passwordInput: createTestAttribute({
    block,
    element: "password input",
  }),
  confirmPasswordInput: createTestAttribute({
    block,
    element: "confirm password input",
  }),
  accepsTermsCheckbox: createTestAttribute({
    block,
    element: "accept terms checkbox",
  }),
};

export default testAttrs;
