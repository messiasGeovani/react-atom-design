/// <reference types="cypress" />

import { elements } from "./elements";

describe("Login screen", () => {
  const data = {
    email: "messias@email.com",
    password: "1234",
  };

  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should get correct input types", () => {
    cy.get("input[type=email]").should("exist");
    cy.get("input[type=password]").should("exist");
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
