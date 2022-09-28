/// <reference types="cypress" />

describe("Signup screen", () => {
  const elements = {
    link: "[data-test='AuthForm:link']",
    emailInput: "[data-test='AuthForm:email-input']",
    passwordInput: "[data-test='AuthForm:password-input']",
    confirmPasswordInput: "[data-test='AuthForm:confirm-password-input']",
    accepTermsCheckbox: "[data-test='AuthForm:accept-terms-checkbox']",
    submitButton: "button[type='submit']",
  };

  const data = {
    email: "messias@email.com",
    password: "1234",
  };

  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should not fill all required fields and block the signup process", () => {
    cy.get(elements.link).click();
    cy.url().should("include", "/signup");

    cy.wait(500);

    cy.get(elements.submitButton).click();

    cy.get("form :invalid").should("exist");

    cy.get(elements.emailInput).type(`${data.email}{enter}`);
    cy.get("form :invalid").should("exist");

    cy.get(elements.passwordInput).type(`${data.password}{enter}`);
    cy.get("form :invalid").should("exist");

    cy.get(elements.confirmPasswordInput).type(`${data.password}{enter}`);
    cy.get("form :invalid").should("exist");

    cy.url().should("include", "/signup");
  });

  it("should fill login form fields and go to profile screen", () => {
    cy.get(elements.link).click();
    cy.url().should("include", "/signup");

    cy.wait(500);

    cy.get(elements.emailInput).type(`${data.email}`);
    cy.get(elements.passwordInput).type(`${data.password}`);
    cy.get(elements.confirmPasswordInput).type(`${data.password}`);
    cy.get(elements.accepTermsCheckbox).check();
    cy.get(elements.submitButton).click();

    cy.url().should("include", "/profile");
  });
});
