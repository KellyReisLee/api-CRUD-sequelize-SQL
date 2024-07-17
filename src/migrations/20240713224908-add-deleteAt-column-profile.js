'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // 'employees' é o nome da tabela e 'deletedAt' é o nome da coluna.
    await queryInterface.addColumn('profiles', 'deletedAt', {
      allowNull: true,
      type: Sequelize.DATE
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('profiles', 'deletedAt');
  }
};

