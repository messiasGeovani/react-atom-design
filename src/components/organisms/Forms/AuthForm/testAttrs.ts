import { createTestAttribute } from "@/utils";

export const testAttrs = {
  alternateForm: createTestAttribute({
    block: "AuthForm",
    element: "link",
  }),
  emailInput: createTestAttribute({
    block: "AuthForm",
    element: "email input",
  }),
  passwordInput: createTestAttribute({
    block: "AuthForm",
    element: "password input",
  }),
  confirmPasswordInput: createTestAttribute({
    block: "AuthForm",
    element: "confirm password input",
  }),
  accepsTermsCheckbox: createTestAttribute({
    block: "AuthForm",
    element: "accept terms checkbox",
  }),
};
