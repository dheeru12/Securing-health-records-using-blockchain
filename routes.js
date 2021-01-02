const routes = require("next-routes")();

routes
  .add("/doctors/:address", "/Records/new")
  .add("/Records/:address", "/Records/show");

module.exports = routes;
