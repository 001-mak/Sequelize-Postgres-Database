"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "UserSkillMaps",
      {
        userId: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          allowNull: false,
          references: {
            model: "Users",
            key: "id",
          },
        },
        skillId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "Skills",
            key: "id",
          },
        },
        createdAt:{
          type: Sequelize.DATE(),
          allowNull:true,
          defaultValue: new Date()
        },
        updatedAt:{
          type: Sequelize.DATE(),
          allowNull:true,
          defaultValue: new Date()
        }
      },
      
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("UserSkillMaps");
  },
};
