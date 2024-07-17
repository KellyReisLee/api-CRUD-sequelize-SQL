'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('sectors', [
      {
        name: 'Engineer',
        type: 'IT',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Food and beverage',
        type: 'Food',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('sectors', null, {});

  }
};
