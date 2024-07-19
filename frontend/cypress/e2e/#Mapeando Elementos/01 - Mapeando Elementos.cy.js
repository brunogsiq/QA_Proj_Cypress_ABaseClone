/// <reference types="cypress" /> 

const elementsMapping = require('../support/elementsMapping');

describe('Teste de Login', () =>
{
    before(() =>
    {
        // Visitar a página definida no mapeamento
        cy.visit(elementsMapping.Page);
    });

    it('Deve realizar o login com sucesso', () =>
    {
        // Usar o mapeamento para encontrar e clicar no botão de login
        const loginButton = elementsMapping.Elements.Botão_login;

        // Verificar se o botão existe
        cy.get(loginButton.properties.Find['#id'])
            .should('be.visible')
            .and('have.attr', 'type', loginButton.properties.Type);

        // Realizar a ação definida (click)
        cy.get(loginButton.properties.Find['#id']).click();
    });
});
