var db = require("../models");

//defining methods for user controller/user routes
module.exports = {
    find: function(){
//when finding One, find by email; once you know user's ID find survey information to send along
    },
    update: function(){

    },
    create: function(req, res){
        db.User
        .create(req.body)
        .then(function(dbUser){
            res.json(dbUser)
        })
    },
    delete: function(){

    },
    findAll: function(){

    },
    deleteAll: function(){

    }
}