'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('employees', [
      {
        name: 'Kelly Reis',
        profile_id: 1,
        sector_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Joana Banana',
        profile_id: 2,
        sector_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('employees', null, {});

  }
};
