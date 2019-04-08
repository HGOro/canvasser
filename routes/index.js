//do I actually need this path? comment out and check if it disrupts functionality
var path = require("path");

// https://expressjs.com/en/api.html#router
var router = require("express").Router();

var apiRoutes = require("./api");
var htmlRoutes = require("./html/html.js");

//router used for particular root URL in this way separating your routes int files

//api routes
//any URL, endpoint, route with "/api" in it
// will be routed to api routes
router.use("/api", apiRoutes);

//html routes
// any url, endpoint, route that server up html (handlebars templates)
// will be routed to html routes
router.use("/", htmlRoutes);

// create catch all
router.use( function(req, res){
   res.render("index")
}
 
);

module.exports = router;