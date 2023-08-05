'use strict';
const { Model } = require('sequelize');
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Skill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Skill.init({
    id: {
      type: Sequelize.UUIDV4, //UUIDV4 for generating random ID
      allowNull: false,
      primaryKey: true,
    },
    skillName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Skill',
    tableName: 'Skills',
  });
  return Skill;
};