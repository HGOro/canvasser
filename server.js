// Set up ======================================================
require("dotenv").config();

var express = require("express");
var exphbs  = require("express-handlebars");

// set up express & port
var app  = express();
var PORT = process.env.PORT || 3001;

// bring in the routes & models
var routes = require("./routes");
var db     = require("./models");

// Configuration ==============================================

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// CORS (fixed a bug/error, found it on google)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

//set up handlebars
app.engine("handlebars", exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");

// use route htm & api
app.use(routes);

// Launch Server ==============================================
//listen on port 3000

db.sequelize.sync().then(function(){
    app.listen(PORT, function(){
        console.log("🌎  ==> Server now listening on PORT:" + PORT);
    })
})