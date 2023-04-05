'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SavedCourse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      SavedCourse.belongsTo(models.Course, {foreignKey:'courseId', as: 'course'});
      SavedCourse.belongsTo(models.User, {foreignKey: 'userId', as: 'user'});
    }
  }
  SavedCourse.init({
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    courseId: {
      type: DataTypes.UUID,
      allowNull:false,
      foreignKey:true
    },
    userId: {
      type: DataTypes.UUID,
      allowNull:false,
      foreignKey:true
    }
  }, {
    sequelize,
    modelName: 'SavedCourse',
  });
  return SavedCourse;
};