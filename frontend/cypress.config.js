const { defineConfig } = require("cypress");

module.exports = defineConfig(
{
    viewportWidth: 1300,
    viewportHeight: 800,
    video: true,
    chromeWebSecurity: false,
    reporter: "mochawesome",
    reporterOptions: {
        reportDir: 'cypress/report',
        overwrite: true,
        html: true,
        json: false,
        timestamp: 'dd-mm-yyyy_HH-MM-ss'
    },
    env: {
        baseUrl: "https://www.google.com",
    },
    e2e: {
        defaultCommandTimeout: 9000,
        experimentalRunAllSpecs: true,
        hideXHRInCommandLog: true,
        //Aqui ficarão todos os meus testes:
        specPattern: [
          "cypress/e2e/#Mapeando Elementos/01 - Mapeando Elementos.cy.js",
          "cypress/e2e/01 - Validar.cy.js",
          "cypress/e2e/acessar gmail.cy.js"
        ],
        setupNodeEvents(on, config) {
          // implement node event listeners here
        },
    },
});