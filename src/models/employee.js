'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
  class Employee extends Model {
    static associate(models) {
      // define association here
    }
  }
  Employee.init({
    name: {
      type: Sequelize.STRING(120),
      allowNull: false
    },
    email: {
      type: Sequelize.STRING(50),
      allowNull: false,
      unique: true
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
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Employee',
    tableName: 'employees'
  });
  return Employee;
};
