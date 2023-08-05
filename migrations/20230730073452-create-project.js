'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Projects', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
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
  
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Projects');
  }
};