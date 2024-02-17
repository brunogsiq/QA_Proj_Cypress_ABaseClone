const { defineConfig } = require("cypress");

module.exports = defineConfig({
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
    baseUrl: "https://www...",
  },
  e2e: {
    defaultCommandTimeout: 9000,
    experimentalRunAllSpecs: true,
    hideXHRInCommandLog: true,
    //Aqui ficarão todos os meus testes:
    specPattern: [
       "cypress/tests/scenes/01 - Validar.cy.js",
      // "cypress/tests/scenes/",
    ],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});