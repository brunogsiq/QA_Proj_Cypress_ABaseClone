/// <reference types="cypress" /> 

import loc2 from "./locatorsMapping";
import loc from "./locators";
import "cypress-wait-until"

Cypress.Commands.add('cyref', ('/// <reference types="cypress"/>'));

//Valida acesso ao sistema.
Cypress.Commands.add('visitarTelaHome',() =>
{
    cy.visit(Cypress.env("baseUrl"))

    // cy.waitUntil(()=>
    //     cy.get(loc.tela_Loginogin.)
    //         .should('be.visible'))

    // cy.get(loc.tela_Loginogin.)
    //     .should('be.visible')

    // cy.get(loc.tela_Loginogin.)
    //     .eq(0)
    //     .type('')

    // cy.get(loc.tela_Loginogin.)
    //     .eq(1)
    //     .type('')

    // cy.get(loc.tela_Login.btnEntrar)
    //     .click()
});