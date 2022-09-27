/// <reference types="cypress" />

describe("Login screen", () => {
  const emailInput = "[data-test='AuthForm:email-input']";
  const passwordInput = "[data-test='AuthForm:password-input']";

  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should fill login form fields and go to profile screen", () => {
    const login = "messias@email.com";
    const password = "1234";

    cy.get(emailInput).type(`${login}`);
    cy.get(passwordInput).type(`${password}{enter}`);
    cy.url().should("include", "/profile");
  });
});
