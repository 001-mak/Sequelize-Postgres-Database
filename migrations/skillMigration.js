"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "Skills",
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        skillName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Skills");
  },
};
