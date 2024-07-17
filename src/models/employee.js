'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  class Employee extends Model {
    static associate(models) {
      // Defina associações aqui, se houver
    }
  }

  Employee.init({
    name: {
      type: Sequelize.STRING(120),
      allowNull: false,
      validate: {
        nameLength(value) {
          if (value.length < 3) {
            throw new Error("Must contain at least 3 characters. ");
          }
        },
      },
    },
  }, {
    sequelize,
    modelName: 'Employee',
    tableName: 'employees',
    paranoid: true
  });
  return Employee;
};
