"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Departments", [
      {
        id: 1,
        departmentName: "Human Resources",
        phone: "123-456-7890",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        departmentName: "Marketing",
        phone: "987-654-3210",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        departmentName: "IT",
        phone: "123-456-7223",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        departmentName: "Finance",
        phone: "521-456-7890",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Departments", null, {});
  },
};
