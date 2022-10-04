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
    cy.get(link).click();
    cy.url().should("include", "/signup");

    cy.wait(500);

    cy.get(submitButton).click();

    cy.get("form :invalid").should("exist");

    cy.get(emailInput).type(`${data.email}{enter}`);
    cy.get("form :invalid").should("exist");

    cy.get(passwordInput).type(`${data.password}{enter}`);
    cy.get("form :invalid").should("exist");

    cy.get(confirmPasswordInput).type(`${data.password}{enter}`);
    cy.get("form :invalid").should("exist");

    cy.url().should("include", "/signup");
  });

  it("should fill login form fields and go to profile screen", () => {
    cy.get(link).click();
    cy.url().should("include", "/signup");

    cy.wait(500);

    cy.get(emailInput).type(`${data.email}`).should("have.value", data.email);

    cy.get(passwordInput)
      .type(`${data.password}`)
      .should("have.value", data.password);

    cy.get(confirmPasswordInput)
      .type(`${data.password}`)
      .should("have.value", data.password);

    cy.get(accepTermsCheckbox).check();
    cy.get(submitButton).click();

    cy.url().should("include", "/profile");
  });
});
