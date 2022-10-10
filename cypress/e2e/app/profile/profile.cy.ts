/// <reference types="cypress" />

import elements from "./elements";

describe("Profile page", () => {
  const { firstNameInput, lastNameInput, emailInput, passwordInput } = elements;

  const auth = {
    email: "teste@meil.com",
    password: "1234",
  };

  const profile = {
    firstName: "Messias",
    lastName: "Geovani",
  };

  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should verify if profile inputs exists", () => {
    cy.login(auth.email, auth.password);

    cy.url().should("include", "/profile");

    cy.get("form").should("exist");

    cy.getElement(firstNameInput).should("exist");
    cy.getElement(lastNameInput).should("exist");
    cy.getElement(emailInput).should("exist");
    cy.getElement(passwordInput).should("exist");
  });

  it("should check if profile email and password inputs are already filled", () => {
    cy.login(auth.email, auth.password);

    cy.getElement(emailInput).should("have.value", auth.email);
    cy.getElement(passwordInput).should("have.value", auth.password);
  });

  it("should try to submit the form without all required data and must be blocked", () => {
    cy.login(auth.email, auth.password);

    cy.get("button[type='submit']").click();

    cy.get("form :invalid").should("exist");
  });

  it("should fill all required fields and get success on form submit", () => {
    cy.login(auth.email, auth.password);

    cy.getElement(firstNameInput)
      .type(profile.firstName)
      .should("have.value", profile.firstName);

    cy.getElement(lastNameInput)
      .type(profile.lastName)
      .should("have.value", profile.lastName);

    cy.get("button[type='submit']").click();

    cy.wait(500);

    cy.url().should("include", "login");
  });
});
