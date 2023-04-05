import CourseService from '../services/CourseService.js';
import Util from '../utils/Utils.js';

const util = new Util();

class CourseController {

  static async getAllCourses(req, res) {
    try {
      const course = await CourseService.getAllCourses();
      if (course.length > 0) {
        util.setSuccess(200, 'Courses retrieved', course);
      } else {
        util.setSuccess(200, 'No Course found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async addCourse(req, res) {
    
    const newCourse = req.body;
    try {
      const course = await CourseService.addCourse(newCourse);
      util.setSuccess(201, 'Course Added Successfully!', course);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updateCourse(req, res) {
    const alteredCourse = req.body;
    const { id } = req.params;
    if (!id) {
      util.setError(400, 'Please input a valid UUID');
      return util.send(res);
    }
    try {
      const course = await CourseService.updateCourse(id, alteredCourse);
      if (!course) {
        util.setError(404, `Cannot find a Course with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Course updated with the following details', course);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error.message);
      return util.send(res);
    }
  }

  static async getACourse(req, res) {
    const { id } = req.params;

    if (!id) {
      util.setError(400, 'Please input a valid UUID');
      return util.send(res);
    }

    try {
      const course = await CourseService.getACourse(id);

      if (!course) {
        util.setError(404, `Cannot find a Course with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found Course', course);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error.message);
      return util.send(res);
    }
  }

  static async deleteCourse(req, res) {
    const { id } = req.params;

    if (!id) {
      util.setError(400, 'Please provide a valid UUID');
      return util.send(res);
    }

    try {
      const course = await CourseService.deleteCourse(id);

      if (course) {
        util.setSuccess(200, `Course with the id: ${id} successfully deleted!`);
      } else {
        util.setError(404, `Course with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }
}

export default CourseController;