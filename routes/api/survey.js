var router = require("express").Router();
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