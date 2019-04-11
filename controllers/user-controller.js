//bring in the models we have access to
//User and Survey this way
var db = require("../models");

//defining methods for user controller/user routes
// controller is the only way we want
// to contact the DB user table
// define methods here

module.exports = {
    find: function(req, res){
        console.log(req.body)
//when finding One, find by email; once you know user's ID find survey information to send along
    },
    findOne: function(req, res){
        // console.log(req.params.userID)
        db.User
        .findOne({where: {uuid: req.params.userID}})
        .then(function(dbUser){
            // console.log(dbUser)
            res.render("survey", dbUser.dataValues)
        })
        .catch(function(err){
            console.log(err)
        });
    },
    update: function(req, res){
        console.log(req.body)
    },
    create: function(req, res){
        console.log(req.body)

        db.User
        .create(req.body)
        .then(function(dbUser){
            res.json(dbUser)
        })
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