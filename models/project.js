'use strict';
const { Model } = require('sequelize');
// const user = require('./user');
// const department = require('./department');
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
    projectName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Project',
    tableName: 'Projects',
  });
  return Project;
};