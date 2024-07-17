'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('sectors', [
      {

        type: 'IT',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

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
