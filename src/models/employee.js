'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  class Employee extends Model {
    static associate(models) {
      Employee.belongsTo(models.Profile, {
        foreignKey: 'profile_id',
        as: 'profile',  // Alias para a associação
        onDelete: 'CASCADE'
      });
      Employee.belongsTo(models.Sector, {
        foreignKey: 'sector_id',
        as: 'sector',  // Alias para a associação
        onDelete: 'CASCADE'
      });
    }
  }

  Employee.init({
    status: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'ativo',
      onDelete: 'CASCADE'
    },
  }, {
    sequelize,
    modelName: 'Employee',
    tableName: 'employees',
    paranoid: true
  });
  return Employee;
};
