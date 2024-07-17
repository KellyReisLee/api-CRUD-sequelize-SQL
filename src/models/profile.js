'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, Sequelize) => {
  class Profile extends Model {

    static associate(models) {
      // Um usuário tem um carrinho
      Profile.hasOne(models.Employee, {
        foreignKey: 'profile_id',
        as: 'employee',  // Alias para a associação
        onDelete: 'CASCADE'
      });

      Profile.belongsTo(models.Sector, {
        foreignKey: 'sector_id',
        as: 'sectorProfile',
        onDelete: 'CASCADE'
      });


    }
  }
  Profile.init({
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
    cpf: {
      type: Sequelize.STRING,
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
      allowNull: false
    },
    cpf: {
      type: Sequelize.STRING,
      allowNull: false
    },
    profession: {
      type: Sequelize.STRING,
      allowNull: false
    },
    sector_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Profile',
    tableName: 'profiles',
    paranoid: true,
  });
  return Profile;
};