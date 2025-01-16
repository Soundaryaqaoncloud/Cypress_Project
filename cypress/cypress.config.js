const { defineConfig } = require("cypress");
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');
const mochawesome = require('cypress-mochawesome-reporter/plugin');
const xlsx = require('xlsx');
const mysql = require('mysql');

module.exports = defineConfig({
  pageLoadTimeout: 120000,
  e2e: {
    setupNodeEvents(on, config) {
      // Adding Mochawesome reporter plugin
      mochawesome(on);

      // Adding task for file download
      on('task', { downloadFile });

      // Registering the 'readXlsx' task
      on('task', {
        readXlsx({ file, sheet }) {
          const workbook = xlsx.readFile(file);
          const worksheet = workbook.Sheets[sheet];
          const rows = xlsx.utils.sheet_to_json(worksheet);
          return rows; // returning the rows from the sheet
        },

        // Handling the 'queryDb' task
        queryDb(query) {
          return new Promise((resolve, reject) => {
            // Create a connection to your database
            const connection = mysql.createConnection(config.env.db);

            connection.connect();

            // Execute the query
            connection.query(query, (error, results) => {
              if (error) {
                reject(error); // Reject the promise if there is an error
              } else {
                connection.end(); // Close the connection after query execution
                resolve(results); // Resolve the promise with the query results
              }
            });
          });
        },
      });
    },
    video: true,
    videosFolder: "cypress/videos",
    screenshotsFolder: "cypress/screenshots",
    screenshotOnRunFailure: true,
  },
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: false,
    json: true,
  },

  projectId: 'k3c9yy'
});
