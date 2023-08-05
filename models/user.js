"use strict";
const Sequelize = require("sequelize");

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  User.init(
    {
      id: {
        type: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      firstName: {
        type: Sequelize.STRING,
      },
      lastName: {
        type: Sequelize.STRING,
      },
      departmentId: {
        type: Sequelize.UUIDV4,
        allowNull: false,
        references: {
          model: "Departments",
          key: "id",
        },
      },
      projectId: {
        type: Sequelize.UUIDV4,
        allowNull: false,
        references: {
          model: "Projects",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "Users",
    }
  );
  return User;
};
