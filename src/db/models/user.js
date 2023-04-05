'use strict';
const {
  Model
} = require('sequelize');
const db = require('./index')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.SavedCourse, {foreignKey: 'savedCourse', as: 'savedCourse'})
      User.hasOne(models.Token, {foreignKey: 'userId', as: 'user'});
    }
  }
  User.init({
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    firstName: {
      allowNull: false, type:DataTypes.STRING
    },
    lastName: {
      allowNull: false, type:DataTypes.STRING
    },
    middleName: DataTypes.STRING,
    email: {
      type:DataTypes.STRING,
      unique:true,
      allowNull:false
    },
    password: {
      type:DataTypes.STRING,
      allowNull:false
    },
    verify: {
      type:DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};