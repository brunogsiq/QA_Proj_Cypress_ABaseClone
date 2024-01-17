/*
    Estruturação do Projeto:

        nameProject
            _wiki/
                #doubt.js
                automationRules.js
                documentationProj.js
                testCases.js
            backend/
            frontend/
                cypress/
                    fixtures/
                    support/
                    tests/
                        lib/
                            dates/
                            function/
                            pageObjects/
                        scenes/
                            files.cy.js
                node_modules/
                cypress.config.js
                package.json
                package-lock.json
            .gitignore
            Readme.md

    Dependências p/ Instalar:

        npm install -D cypress-wait-until
            Após:
                Add this line to your project's cypress/support/commands.js:
                import 'cypress-wait-until';
                and add in cypress/support/e2e.js:
                require('cypress-wait-until')
            Ex:
                cy.waitUntil(() =>
                    cy.get('')
                        .should("be.visible"));

        npm install -D cypress-iframe
            Após, será necessário inserir em cypress/support/commands.js, inserir:
            import 'cypress-iframe'; or require('cypress-iframe');
*/