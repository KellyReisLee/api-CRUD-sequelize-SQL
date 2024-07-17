'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sector extends Model {

    static associate(models) {
      Sector.hasMany(models.Employee, {
        foreignKey: 'sector_id',
        onDelete: 'CASCADE'
      });

      Sector.hasMany(models.Profile, {
        foreignKey: 'sector_id',
        onDelete: 'CASCADE'
      });
    }
  }
  Sector.init({
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Sector',
    tableName: 'sectors',
    paranoid: true,
  });
  return Sector;
};