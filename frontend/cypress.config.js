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
    e2e: {
        defaultCommandTimeout: 9000,
        experimentalRunAllSpecs: true,
        hideXHRInCommandLog: true,
        //Aqui ficarão todos os meus testes:
        specPattern: [
          "cypress/e2e/00 - Teste Padrao/_TestePadrao.cy.js"
        ],
        setupNodeEvents(on, config) {
          // implement node event listeners here
        },
    },
    env: {
        baseUrl: "www.google.com",
        dev: "https://www.",
        tst: "https://www.",
        hml: "https://www.",
        prod: "https://www."
    },
});