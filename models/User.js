var Sequelize = require("sequelize");

// table that will hold all the user data a user fills about them self
// the survey will belong to a user
// use UUID instead on the incrimenting default id mysql/sequelize creates
// https://stackoverflow.com/questions/292965/what-is-a-uuid
// http://docs.sequelizejs.com/class/lib/data-types.js~UUID.html
// http://docs.sequelizejs.com/class/lib/data-types.js~UUIDV4.html

// var UUIDV1 = require("uuidv1"); 

module.exports = function(sequelize, DataTypes){
    var User = sequelize.define("User", {
        
        userID:{
            primaryKey: true,
            type: Sequelize.INTEGER,
            autoIncrement: true    
        },
         
        //uuid: {
        //    type: DataTypes.UUID,
        //    defaultValue: DataTypes.UUIDV1,
        //    isUnique: true
        //},
       
        firstName: {
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

        age:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min: 2
            }
        }, 

        gender:{
            type: DataTypes.ENUM("value 1", "value 2", "value 3", "value 4"),
            //type: DataTypes.STRING,
            //allowNull: false
        },

        languagePref:{
            type: DataTypes.ENUM("value 1", "value 2", "value 3", "value 4", "value 5"),
            allowNull: true
        },

        email:{
            type: DataTypes.STRING,
            isUnique: true,
            allowNull: false,
            validate:{
                isEmail: true,
                min: 4
            }
        },

        phoneNumber:{
            type: DataTypes.STRING,
            allowNull: true
        },

        address:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min: 4
            }
        },

        address2:{
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                min: 1
            }
        },
        
        city:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                //is: ["^[a-z]+$",'i'],
                min: 2
            }
        },
        
        state:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: ["^[a-z]+$",'i'],
                min: 2
            }
        },
        zip:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min: 4
            }
        },
        
        
        createdAt: Sequelize.DATE, 
        updatedAt: Sequelize.DATE

    })
    //associations
    User.associate = function(models){
        User.hasOne(models.Survey, {
            foreignKey: "surveyuserID", 
            onDelete: "cascade"
        })
    }
    return User
}