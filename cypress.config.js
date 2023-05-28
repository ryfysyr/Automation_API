const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "8ke32t",
  chromeWebSecurity: false,

  reporterOptions: {
    apiToken: "d22c8706cb6d5974cf5ff415f6b9cee5ad9b7f73",
    projectCode: "EB",
    logging: true,
  },

  API: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },

    specPattern: "cypress/API/**/*.{js,jsx,ts,tsx}",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
