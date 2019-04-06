var db = require("../models");

//defining methods for user controller/user routes
module.exports = {
    find: function(req, res){
        console.log(req.body)
//when finding One, find by email; once you know user's ID find survey information to send along
    },
    update: function(req, res){
        console.log(req.body)
    },
    create: function(req, res){
        console.log(req.body)
//        db.User
//        .create(req.body)
//        .then(function(dbUser){
//            res.json(dbUser)
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