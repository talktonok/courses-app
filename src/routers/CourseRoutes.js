import { Router } from "express";
const CourseRouter = Router();
import CourseController from '../controllers/CourseController.js';

CourseRouter.post('/', CourseController.addCourse);
CourseRouter.put('/:id', CourseController.updateCourse);
CourseRouter.get('/', CourseController.getAllCourses);
CourseRouter.get('/:id', CourseController.getACourse);
CourseRouter.delete('/:id', CourseController.deleteCourse);

export { CourseRouter };