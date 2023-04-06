/* eslint-disable no-useless-catch */
import database from '../db/models/index.js';
class SavedCourseService {
  constructor() {
  }

  static async addSavedCourse(addCourse) {
    try {
      const course = await database.SavedCourse.create(addCourse);

      if (course) {
        return course;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAllSavedCourses() {
    try {
      const result = await database.User.findAll({
        attributes: [],
        include: {
          model: database.Course,
          as: 'UserCourses',
          through: {
            attributes: []
          },
          required: true
        }
      });
      return result;
    } catch (error) {
      // console.log(error)
      throw error;
    }
  }

  static async getAllUserSavedCourses(id) {
    try {
      const result = await database.Course.findAll({
        attributes: ['title', 'code'],
        include: {
          model: database.User,
          as: 'SavedCourses',
          where: {
            id: id
          },
          attributes: [],
           through: {
             attributes: []
           },
          required: true
        }
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async updateSavedCourse(id, courseID, updateCourse) {
    try {
      const course = await database.SavedCourse.findOne({
        where: { userId: id, courseId: courseID }
      });

      if (course) {
        await database.SavedCourse.update(updateCourse, { where: { userId: id, courseId: courseID } });

        return updateCourse;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getASavedCourse(id, courseID) {
    try {
      const course = await database.SavedCourse.findOne({
        where: {userId:id, courseId: courseID}
      });

      return course;
    } catch (error) {
      throw error;
    }
  }

  static async deleteSavedCourse(id, courseID) {
    try {
      const course = await database.SavedCourse.findOne({ where: { userId: id, courseId: courseID } });
      
      if (course) {
        const deletedCourse = await database.SavedCourse.destroy({
          where: { userId: id, courseId: courseID}
        });
        return deletedCourse;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default SavedCourseService;
