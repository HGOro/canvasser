// all pages will be rendered through html routes
// if template needs to render data call on controller and uer method defined, 
// pass the controller a call back to give the data back to the route and render 
// in a handle bars obj. example
/*
var surveyController = require("../../controllers/survey-controller");
// home page show a graph with survey info
router.get("/", function(req, res){
    var allSurveyData = surveyController.getAll();
     res.render("index", allSurveyData);
})
*/

var router = require("express").Router();
var userController = require("../../controllers/user-controller");
//var surveyController = require("../../controllers/survey-controller");


router.get("/", function(req, res){
    res.render("index")
})

router.get("/search", function(req, res){
    res.render("search")
})

router.get("/user", function(req, res){
    res.render("user")
})

router.get("/survey", function(req, res){
    res.render("survey")
})

router.route("/survey/:userID")
    .get( userController.findOne);

module.exports = router