'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('profiles', [
      {

        email: 'kelly@gmail.com',
        cpf: '15263745867',
        gender: 'female',
        mobile: '98925631637',
        profession: 'software engineer',
        createdAt: new Date(),
        updatedAt: new Date()


      },
      {

        email: 'joana@gmail.com',
        cpf: '15263745176',
        gender: 'female',
        mobile: '9152374839',
        profession: 'UI/UX',
        createdAt: new Date(),
        updatedAt: new Date()

      },

    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('profiles', null, {});

  }
};
