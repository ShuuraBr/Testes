// cypress/support/commands.js

// Comando personalizado para login
Cypress.Commands.add('login', (username, password) => {
  cy.visit('/');
  // Usando seletores data-test para maior robustez
  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type(password);
  cy.get('[data-test="login-button"]').click();
  cy.url().should('include', '/inventory.html');
});