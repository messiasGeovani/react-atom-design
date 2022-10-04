/// <reference types="cypress" />

import elements from "../e2e/app/auth/elements";

const tracerSelector = (identifier: string) => `[data-test='${identifier}']`;

Cypress.Commands.add("getElement", (identifier) => {
  const selector = tracerSelector(identifier);
  return cy.get(selector);
});

Cypress.Commands.add("login", (email, password) => {
  cy.getElement(elements.emailInput).type(email).should("have.value", email);

  cy.getElement(elements.passwordInput)
    .type(password)
    .should("have.value", password);

  cy.get("form").should("exist").submit();
});

declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>;
      drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>;
      dismiss(
        subject: string,
        options?: Partial<TypeOptions>
      ): Chainable<Element>;
      visit(
        originalFn: CommandOriginalFn<any>,
        url: string,
        options: Partial<VisitOptions>
      ): Chainable<Element>;
      getElement(identifier: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}