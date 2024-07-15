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
    email: {
      type: Sequelize.STRING(50),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: 'Must be a valid email.'
        }
      }
    },
    gender: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'male',
      validate: {
        isIn: {
          args: [['male', 'female', 'other']],
          msg: "Gender must be 'male', 'female', or 'other'"
        }
      }
    },
    mobile: {
      type: Sequelize.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Employee',
    tableName: 'employees'
  });
  return Employee;
};
