var db = require("../models");

//defining methods for user controller/user routes
module.exports = {
    find: function(req, res){
        console.log(req.body)

    },
    update: function(req, res){
        console.log(req.body)
    },
    create: function(req, res){
        console.log(req.body)
//        db.Survey
//        .create(req.body)        
//        .then(function(dbSurvey){
//            res.json(dbSurvey)
//        })
    
    },
    delete: function(req, res){
        console.log(req.body)
    },
    findAll: function(req, res){
        console.log(req.body)
    },
    deleteAll: function(req, res){
        console.log(req.body)
    }
}