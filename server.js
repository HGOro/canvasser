//  config
require("dotenv").config();

var express = require("express");
var exphbs = require("express-handlebars");

var app = express();

var PORT = process.env.PORT || 3000;

var routes = require("./routes");
var db = require("./models");

app.use(express.static("public"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

//set up handlebars
app.engine("handlebars", exphbs({defaultLayout:"main"}));

app.use(routes);

//launch server
db.sequelize.sync().then(function(){
    app.listen(PORT, function(){
        console.log("App server listening on:", PORT)
    })
})
