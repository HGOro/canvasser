var router = require("express").Router();
// let router know which controller to use for these routes,
// making methods defined for each available
var surveyController = require("../../controllers/survey-controller");

//all routes that match with "/api/survey"
router.route("/")
    .get(surveyController.find)
    .put(surveyController.update)
    .post(surveyController.create)
    .delete(surveyController.delete);

//routes that match with "/api/survey/all"
router.route("/all")
    .get(surveyController.findAll)
    .delete(surveyController.deleteAll);


module.exports = router