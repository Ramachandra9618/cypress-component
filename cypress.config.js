const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  "screenshotOnRunFailure": true,
  reporterOptions: {
    reportDir: 'cypress/reports',
    reportFilename: 'report',
    quiet: true,
    overwrite: false,
    html: true,
    json: false,
    photo:true
  },
  component: {
    video:true,
    photo: true, 
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
