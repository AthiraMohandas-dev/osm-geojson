const dataRouter = require("express").Router();
const getGeographicData = require("../controller/index");
const middlewareValidator = require("../middleware/index");

const apiUri = {
  base: "/osm",
};

dataRouter
  .route(apiUri.base)
  .get(middlewareValidator.validateRequestQuery(), getGeographicData);

module.exports = dataRouter;
