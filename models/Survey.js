var Sequelize = require("sequelize");

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