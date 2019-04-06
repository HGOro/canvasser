//  config
var express = require("express");
var exphbs = require("express-handlebars");

var routes = require("./routes");
var db = require("./models");

var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

//set up handlebars
app.engine("handlebars", exphbs({defaultLayout:"main"}));

app.use(routes);

//launch server
db.sequelize.sync().then(function(){
    app.listen(PORT, function(){
        console.log("App server listening on:", PORT)
    })
})
