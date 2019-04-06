var router = require("express").Router();
var exphbs = require("express-handlebars");

router.get("/", function(req, res){
    res.render("index")
})


module.exports = router