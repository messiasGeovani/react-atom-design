/// <reference types="cypress" />

describe("Login screen", () => {
  const elements = {
    link: "[data-test='AuthForm:link']",
    emailInput: "[data-test='AuthForm:email-input']",
    passwordInput: "[data-test='AuthForm:password-input']",
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
    cy.url().should("include", "/login");

    cy.get(elements.submitButton).click();

    cy.get("form :invalid").should("exist");

    cy.get(elements.emailInput).type(`${data.email}{enter}`);
    cy.get("form :invalid").should("exist");

    cy.url().should("include", "/login");
  });

  it("should fill login form fields and go to profile screen", () => {
    cy.get(elements.emailInput).type(`${data.email}`);
    cy.get(elements.passwordInput).type(`${data.password}{enter}`);
    cy.url().should("include", "/profile");
  });
});
