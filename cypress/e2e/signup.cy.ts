/// <reference types="cypress" />

describe("Signup screen", () => {
  const elements = {
    link: "[data-test='AuthForm:link']",
    emailInput: "[data-test='AuthForm:email-input']",
    passwordInput: "[data-test='AuthForm:confirm-password-input']",
    confirmPasswordInput: "[data-test='AuthForm:confirm-password-input']",
    accepTermsCheckbox: "[data-test='AuthForm:accept-terms-checkbox']",
    submitButton: "button[type='submit']",
  };

  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should fill login form fields and go to profile screen", () => {
    const login = "messias@email.com";
    const password = "1234";

    cy.get(elements.link).click();
    cy.url().should("include", "/signup");

    cy.wait(500);

    cy.get(elements.emailInput).type(`${login}`);
    cy.get(elements.passwordInput).type(`${password}`);
    cy.get(elements.confirmPasswordInput).type(`${password}`);
    cy.get(elements.accepTermsCheckbox).check();
    cy.get(elements.submitButton).click();

    cy.url().should("include", "/profile");
  });
});
