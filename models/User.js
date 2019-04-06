var Sequelize = require("sequelize");

var UUIDV1 = require("uuidv1"); 

module.exports = function(sequelize, DataTypes){
    var User = sequelize.define("User", {
        uuid: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            isUnique: true
        },
//        email:{
//
//        },
//        firstName:{
//
//        },
//        lastName:{
//
//        },
//        city:{
//
//        },
//        state:{
//
//        },
//        zip:{
//
//        },
//        address:{
//
//        },
//        phoneNumber:{
//
//        },
//        age:{
//
//        },
//        languagePref:{
//
//        },
        createdAt: Sequelize.DATE, 
        updatedAt: Sequelize.DATE

    })
    //associations
    User.associate = function(models){
        User.hasOne(models.Survey, {
            foreignKey: "surveyUUID", 
            onDelete: "cascade"
        })
    }
    return User
}