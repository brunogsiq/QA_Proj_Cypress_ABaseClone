Cypress.Commands.add('cyref', ('/// <reference types="cypress" />'))

Cypress.Commands.add('configureUncaughtException', () =>
{
    Cypress.on('uncaught:exception', (err, runnable) =>
    {
        return false;
    });
});