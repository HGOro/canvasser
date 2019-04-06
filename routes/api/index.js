var router = require("express").Router();

var userRoutes = require("./user");
var surveyRoutes = require("./survey");

router.use("/user", userRoutes);
router.use("/survey", surveyRoutes);

module.exports = router