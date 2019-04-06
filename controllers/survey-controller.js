var db = require("../models");

//defining methods for user controller/user routes
module.exports = {
    find: function(){

    },
    update: function(){

    },
    create: function(req, res){
        db.Survey
        .create(req.body)        
        .then(function(dbSurvey){
            res.json(dbSurvey)
        })
    
    },
    delete: function(){

    },
    findAll: function(){

    },
    deleteAll: function(){

    }
}