var Sequelize = require("sequelize");
// table that will hold all the survey data a user fills o
// the survey will belong to a user
// use UUID instead on the incrimenting default id mysql/sequelize creates
// https://stackoverflow.com/questions/292965/what-is-a-uuid
// http://docs.sequelizejs.com/class/lib/data-types.js~UUID.html
// http://docs.sequelizejs.com/class/lib/data-types.js~UUIDV4.html

var UUIDV1 = require("uuidv1"); 

module.exports = function(sequelize, DataTypes){
    var Survey = sequelize.define("Survey", {
        uuid: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            isUnique: true
        },

        createdAt: Sequelize.DATE, 
        updatedAt: Sequelize.DATE

    })
    //associations
    Survey.associate = function(models){
        Survey.belongsTo(models.User, {
            foreignKey: "userUUID", 
            onDelete: "cascade"
        })
    }
    return Survey
}