const morx = require('morx');
import SavedCourseService from '../services/SavedCourseService.js';
import Util from '../utils/Utils.js';

const util = new Util();

class SavedCourseController {
  
  static async addSavedCourse(req, res) {
    const spec = morx.spec()
.build('courseId', 'required:true, eg:uuid4')
.build('userId', 'required:true, eg:uuid4')
.end();

const validated = morx.validate(req.body, spec);
            const newSavedCourse = validated.params;

    try {
      const createdSavedCourse = await SavedCourseService.addSavedCourse(newSavedCourse);
      
      if(createdSavedCourse){
      util.setSuccess(201, 'Course Added to User list!', createdSavedCourse);
      return util.send(res);
      }else{
        util.setSuccess(400, 'Faild!', createdSavedCourse);
      return util.send(res);
      }
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async getAllSavedCourses(req, res) {
    try {
      const courses = await SavedCourseService.getAllSavedCourses();
      if (courses.length > 0) {
        util.setSuccess(200, 'Courses retrieved', courses);
      } else {
        util.setSuccess(404, 'No Course found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async getAllUserSavedCourses(req, res) {
    
    const { id } = req.params;
    try {
      const courses = await SavedCourseService.getAllUserSavedCourses(id);
      if (courses.length > 0) {
        util.setSuccess(200, 'Courses retrieved', courses);
      } else {
        util.setSuccess(404, 'No Course found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updateSavedCourse(req, res) {
    const spec = morx.spec()
.build('courseId', 'required:true, eg:uuid4')
.build('userId', 'required:true, eg:uuid4')
.end();

const validated = morx.validate(req.body, spec);
            const alteredSavedCourse = validated.params;
    const { id, courseID } = req.params;

    try {
      const updateSavedCourse = await SavedCourseService.updateSavedCourse(id, courseID, alteredSavedCourse);
      if (!updateSavedCourse) {
        util.setError(404, `Course not found`);
      } else {
        util.setSuccess(200, 'Course updated', updateSavedCourse);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async getASavedCourse(req, res) {
    const {id, courseID } = req.params;

    if (courseID==null || id==null) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theSavedCourse = await SavedCourseService.getASavedCourse(id, courseID);

      if (!theSavedCourse) {
        util.setError(404, `Course not found`);
      } else {
        util.setSuccess(200, 'Course Found', theSavedCourse);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async deleteSavedCourse(req, res) {
    const { id, courseID } = req.params;

    if (id==null || courseID==null) {
      util.setError(400, 'Please provide valid id');
      return util.send(res);
    }

    try {
      const SavedCourseToDelete = await SavedCourseService.deleteSavedCourse(id, courseID);

      if (SavedCourseToDelete) {
        util.setSuccess(200, 'SavedCourse deleted');
      } else {
        util.setError(404, `Course cannot be found your course list`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }
}

export default SavedCourseController;