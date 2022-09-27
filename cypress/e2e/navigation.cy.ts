/// <reference types="cypress" />

describe("Navigation", () => {
  const link = "[data-test='AuthForm:link']";

  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should go to login page when open the app", () => {
    cy.url().should("include", "/login");
    cy.get("h1").contains("Login");
  });

  it("should navigate to signup page", () => {
    cy.url().should("include", "/login");
    cy.get(link).click();
    cy.url().should("include", "/signup");
    cy.wait(500);
    cy.get("h1").contains("Registre-se");
  });

  it("should navigate to signup page and back to login page", () => {
    cy.url().should("include", "/login");
    cy.get(link).click();
    cy.url().should("include", "/signup");
    cy.wait(500);
    cy.get(link).click();
    cy.wait(500);
    cy.url().should("include", "/login");
    cy.get("h1").contains("Login");
  });
});
