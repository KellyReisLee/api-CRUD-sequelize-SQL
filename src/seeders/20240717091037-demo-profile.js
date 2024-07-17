'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('profiles', [
      {
        name: 'Kelly Reis',
        email: 'kelly@gmail.com',
        cpf: '15263745867',
        gender: 'female',
        mobile: '98925631637',
        profession: 'software engineer',
        sector_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()


      },
      {
        name: 'Joana Banana',
        email: 'joana@gmail.com',
        cpf: '15263745176',
        gender: 'female',
        mobile: '9152374839',
        profession: 'UI/UX',
        sector_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name: 'Pedro Silva',
        email: 'pedro@gmail.com',
        cpf: '15263745183',
        gender: 'male',
        mobile: '9152374878',
        profession: 'Cook',
        sector_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()

      },

    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('profiles', null, {});

  }
};
