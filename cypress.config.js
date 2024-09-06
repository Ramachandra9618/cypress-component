const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {
    video:true,
    photo: true, 
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
