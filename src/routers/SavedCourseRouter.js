import { Router } from 'express';
import SavedCourseController from '../controllers/SavedCourseController.js';

const SavedCourseRouter = Router();

SavedCourseRouter.get('/', SavedCourseController.getAllSavedCourses);
SavedCourseRouter.post('/', SavedCourseController.addSavedCourse);
SavedCourseRouter.get('/:id', SavedCourseController.getAllUserSavedCourses);
SavedCourseRouter.get('/:id/:courseID', SavedCourseController.getASavedCourse);
SavedCourseRouter.put('/:id/:courseID', SavedCourseController.updateSavedCourse);
SavedCourseRouter.delete('/:id/:courseID', SavedCourseController.deleteSavedCourse);

export default SavedCourseRouter;