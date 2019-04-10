//index file makes both files in folder accessible globally
var router = require("express").Router();

//bring in user and survey
var userRoutes = require("./user");
var surveyRoutes = require("./survey");

router.use("/user", userRoutes);
router.use("/survey", surveyRoutes);


module.exports = router