/* eslint-disable no-useless-catch */
import database from '../db/models/index.js';
class CourseService {
  constructor() {
  }
  static async getAllCourses() {
    try {
      const result = await database.Course.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async addCourse(addCourse) {
    try {

      const course = await database.Course.create(addCourse);
      if (course) {
        return course;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async updateCourse(id, updateCourse) {
    try {
      const course = await database.Course.findOne({
        where: { id: id}
      });

      if (course) {
        await database.Course.update(updateCourse, { where: { id: id} });

        return updateCourse;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getACourse(id) {
    try {
      const course = await database.Course.findOne({
        where: { id: id}
      });

      return course;
    } catch (error) {
      throw error;
    }
  }

  static async deleteCourse(id) {
    try {
      const course = await database.Course.findOne({ where: { id: id} });

      if (course) {
        const deletedCourse = await database.Course.destroy({
          where: { id: id}
        });
        return deletedCourse;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default CourseService;
