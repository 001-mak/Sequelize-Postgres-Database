'use strict';
const { Model } = require('sequelize');
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.hasMany(models.User)
      // models.User.belongsTo(this,{as:'projectId'})

    }
  }
  Project.init({
    id: {
      type: Sequelize.UUIDV4, //UUIDV4 for generating random ID
      allowNull: false,
      primaryKey: true,
    },
    projectName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    departmentId: {
      type: Sequelize.INTEGER,
      allowNull:false,
      references:{
        model: 'Departments',
        key: 'id'
      }
    },

  }, {
    sequelize,
    modelName: 'Project',
    tableName: 'Projects',
  });
  return Project;
};