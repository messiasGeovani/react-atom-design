/// <reference types="cypress" />

import elements from "./elements";

describe("Signup screen", () => {
  const {
    link,
    submitButton,
    emailInput,
    passwordInput,
    confirmPasswordInput,
    accepTermsCheckbox,
  } = elements;

  const data = {
    email: "messias@email.com",
    password: "1234",
  };

  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should not fill all required fields and block the signup process", () => {
    cy.getElement(link).click();
    cy.url().should("include", "/signup");

    cy.wait(500);

    cy.get(submitButton).click();

    cy.get("form :invalid").should("exist");

    cy.getElement(emailInput).type(`${data.email}{enter}`);
    cy.get("form :invalid").should("exist");

    cy.getElement(passwordInput).type(`${data.password}{enter}`);
    cy.get("form :invalid").should("exist");

    cy.getElement(confirmPasswordInput).type(`${data.password}{enter}`);
    cy.get("form :invalid").should("exist");

    cy.url().should("include", "/signup");
  });

  it("should fill login form fields and go to profile screen", () => {
    cy.getElement(link).click();
    cy.url().should("include", "/signup");

    cy.wait(500);

    cy.getElement(emailInput).type(`${data.email}`).should("have.value", data.email);

    cy.getElement(passwordInput)
      .type(`${data.password}`)
      .should("have.value", data.password);

    cy.getElement(confirmPasswordInput)
      .type(`${data.password}`)
      .should("have.value", data.password);

    cy.getElement(accepTermsCheckbox).check();
    cy.get(submitButton).click();

    cy.url().should("include", "/profile");
  });
});
