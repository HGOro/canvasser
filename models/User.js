var Sequelize = require("sequelize");

// table that will hold all the user data a user fills about them self
// the survey will belong to a user
// use UUID instead on the incrimenting default id mysql/sequelize creates
// https://stackoverflow.com/questions/292965/what-is-a-uuid
// http://docs.sequelizejs.com/class/lib/data-types.js~UUID.html
// http://docs.sequelizejs.com/class/lib/data-types.js~UUIDV4.html

var UUIDV1 = require("uuidv1"); 

module.exports = function(sequelize, DataTypes){
    var User = sequelize.define("User", {
        uuid: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            isUnique: true
        },
        email:{
            type: DataTypes.STRING,
            isUnique: true,
            allowNull: false,
            validate:{
                isEmail: true,
                min: 5
            }
        },
        firstName:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: ["^[a-z]+$",'i'],
                min: 1
            }
        },
        lastName:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: ["^[a-z]+$",'i'],
                min: 1
            }

        },
        city:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: ["^[a-z]+$",'i'],
                min: 1
            }
        },
        state:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: ["^[a-z]+$",'i'],
                min: 1
            }
        },
        zip:{
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 5
            }
        },
        address:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min: 2
            }
        },
        phoneNumber:{
            type: DataTypes.STRING,
            allowNull: true
        },
        age:{
            type: DataTypes.STRING,
            allowNull: true
        },
        languagePref:{
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "English"
        },
        gender:{
            type: DataTypes.STRING,
            allowNull: true
        },
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