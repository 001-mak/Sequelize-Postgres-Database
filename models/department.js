'use strict';
const { Model } = require('sequelize');
const Sequelize = require('sequelize')

// const User = require('./user')
// const Project = require('./project')

module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Department.hasMany(models.User)
      // models.User.belongsTo(Department)
    }
  }
  Department.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    departmentName: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }, {
    sequelize,
    modelName: 'Department',
    tableName: 'Departments',
  });
  return Department;
};