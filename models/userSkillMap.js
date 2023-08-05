'use strict';
const { Model } = require('sequelize');
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class userSkillMap extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  userSkillMap.init({
    userId: {
        type: Sequelize.UUIDV4,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
      skillId: {
        type: Sequelize.UUIDV4,
        allowNull: false,
        references: {
          model: "Skills",
          key: "id",
        },
      },
  }, {
    sequelize,
    modelName: 'UserSkillMap',
    tableName: 'UserSkillMaps',
  });
  return userSkillMap;
};