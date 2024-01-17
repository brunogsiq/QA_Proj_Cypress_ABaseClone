/// <reference types="cypress" />

import { elementsProj } from "../pageObjects/elementsProj";

export function acessUrl ()
{
    let pO = elementsProj()
    cy.visit(Cypress.env("baseUrl"));
    cy.waitUntil(() =>
      cy.get(pO.clogo)
        .should('be.visible'));
}