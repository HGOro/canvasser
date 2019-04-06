var path = require("path");
var router = require("express").Router();

var apiRoutes = require("./api");
var htmlRoutes = require("./html/html.js");

//api routes
router.use("/api", apiRoutes);

//html routes
router.use("/", htmlRoutes);

// create catch all
router.use( function(req, res){
   res.render("index")
}
 
);

module.exports = router;