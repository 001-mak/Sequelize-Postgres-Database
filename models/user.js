'use strict';
const Sequelize = require('sequelize');

const Project = require('./project');
const Department = require('./department');
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
   class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */


    static associate(models) {
  
    }
  }
  User.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    departmentId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model: 'Departments',
          key: 'id'
        }
      },
      projectId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model: 'Projects',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    ,
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'Users',
  });
  return User;
};
