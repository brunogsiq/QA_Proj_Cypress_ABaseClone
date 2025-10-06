const { defineConfig } = require("cypress");

module.exports = defineConfig({
	viewportWidth: 1300,
	viewportHeight: 800,
	video: true,
	chromeWebSecurity: false,

	reporter: "mochawesome",
	reporterOptions: {
		reportDir: "cypress/reports/",
		overwrite: true,
		html: true,
		json: false,
		timestamp: "dd-mm-yyyy_HH-MM-ss",
	},

	e2e: {
		baseUrl: "https://www.google.com.br",
		defaultCommandTimeout: 9000,
		pageLoadTimeout: 120000,
		experimentalRunAllSpecs: true,
		hideXHRInCommandLog: true,
		specPattern: "cypress/e2e/**/*.cy.js",
			setupNodeEvents(on, config) {
				// implement node event listeners here;
			},
	},

	env: {
		dev: "https://www.seuambiente-dev.com",
		tst: "https://www.seuambiente-tst.com",
		hml: "https://www.seuambiente-hml.com",
		prod: "https://www.seuambiente-prod.com",
	},
});