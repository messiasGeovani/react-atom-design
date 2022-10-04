/// <reference types="cypress" />

import elements from "./elements";

describe("Login screen", () => {
  const { submitButton, emailInput } = elements;

  const data = {
    email: "messias@email.com",
    password: "1234",
  };

  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should verify if auth inputs exists", () => {
    cy.get("input[type=email]").should("exist");
    cy.get("input[type=password]").should("exist");
  });

  it("should not fill all required fields and block the signup process", () => {
    cy.url().should("include", "/login");

    cy.get(submitButton).click();

    cy.get("form :invalid").should("exist");

    cy.getElement(emailInput).type(`${data.email}{enter}`);
    cy.get("form :invalid").should("exist");

    cy.url().should("include", "/login");
  });

  it("should fill login form fields and go to profile screen", () => {
    cy.login(data.email, data.password);
    cy.url().should("include", "/profile");
  });
});
