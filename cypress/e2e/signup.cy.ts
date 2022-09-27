/// <reference types="cypress" />

describe("Signup screen", () => {
  const link = "[data-test='AuthForm:link']";

  const emailInput = "[data-test='AuthForm:email-input']";
  const passwordInput = "[data-test='AuthForm:password-input']";
  const confirmPasswordInput = "[data-test='AuthForm:confirm-password-input']";
  const accepTermsCheckbox = "[data-test='AuthForm:accept-terms-checkbox']";

  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should fill login form fields and go to profile screen", () => {
    const login = "messias@email.com";
    const password = "1234";

    cy.get(link).click();

    cy.get(emailInput).type(`${login}`);
    cy.get(passwordInput).type(`${password}`);
    cy.get(confirmPasswordInput).type(`${password}`);
    cy.get(accepTermsCheckbox).check();
    cy.get("button[type='submit']").click();
    cy.wait(500);
    cy.url().should("include", "/profile");
  });
});
