// bring in the models we have access to 
// User and Survey this way
var db = require("../models");

//defining methods for user controller/user routes
// controller is the only way we want 
// to contact the DB survey table
// define methods here 
module.exports = {
    find: function(req, res){
        console.log(req.body)

    },
    update: function(req, res){
        console.log(req.body)
    },
    create: function(req, res){
        console.log(req.body)
        db.Survey
        .create(req.body)        
        .then(function(dbSurvey){
            res.json(dbSurvey)
        })    
    },
    delete: function(req, res){
        console.log(req.body)
    },
    getAll: function(){
        // db.Survey
        // .findAll()
        // .then(function(allSurvey){
        //     return allSurvey
        // })
        var dbSurvey = {randomKey:"random value"}
        return dbSurvey
    },
    findAll: function(req, res){
        db.Survey
        .findAll()
        .then(function(allSurvey){
            res.json(allSurvey)
        })
        
    },
    deleteAll: function(req, res){
        console.log(req.body)
    },

}