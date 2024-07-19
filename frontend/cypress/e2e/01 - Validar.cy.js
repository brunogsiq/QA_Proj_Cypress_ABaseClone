/// <reference types='cypress' />

let Context = 0
let Describe = 0
let Test = 0

context(`${++Context}: Plataforma Web - Versão X.xx.xx - Tela de Home.`, () =>
{
    beforeEach(() =>
    {
        cy.visit(Cypress.env('baseUrl'))
    });

    describe(`Cenário ${++Describe}: Validaçãp de`, () =>
    {
        let Complemento = 0

        it(`Teste ${++Test}.${++Complemento}: Validar NOME DO TESTE (Ex: Validar Acesso a Url)`, () =>
        {
            cy.get('.ele')
                .should('be.visible')
        })
    })
})