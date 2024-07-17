'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, Sequelize) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Profile.init({

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
    },
    cpf: {
      type: Sequelize.STRING
    },
    profession: {
      type: Sequelize.STRING
    },
  }, {
    sequelize,
    modelName: 'Profile',
    tableName: 'profiles'
  });
  return Profile;
};