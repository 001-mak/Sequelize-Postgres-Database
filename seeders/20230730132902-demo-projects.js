'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Projects", [
      {
        id: 1,
        projectName: "Website Redesign",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        projectName: "Logo Redesign",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        projectName: "label Redesign",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        projectName: "software development",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        projectName: "Marketing",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Projects", null, {});
  },
};
