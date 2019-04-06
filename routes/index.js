var path = require("path");
var router = require("express").Router();

var apiRoutes = require("./api");
var htmlRoutes = require("./html");

//api routes
router.use("/api", apiRoutes);

//html routes
router.use("/", htmlRoutes);

// create catch all

module.export = router;