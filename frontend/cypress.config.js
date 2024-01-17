const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1300,
  viewportHeight: 800,
  chromeWebSecurity: false,
  video: true,
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