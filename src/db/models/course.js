'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Course.belongsTo(models.User, {foreignKey: 'userId', as:   'user'});
      // Course.belongsTo(models.Class, {foreignKey: 'classId', as:   'class'});
      // Course.hasMany(models.SavedCourse, {foreignKey: 'courseId', as: 'Course'})
      Course.belongsToMany(models.User, {through: 'SavedCourse', foreignKey: 'courseId', as: 'SavedCourses',});
    }
  }
  Course.init({
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    title:{
       type: DataTypes.STRING,
       allowNull:false
    },
    code:{
       type: DataTypes.STRING,
       allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};