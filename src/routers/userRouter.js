import { Router } from "express";
const userRouter = Router();
import userController from '../controllers/UserController.js'

userRouter.post('/login', userController.handleLogin);
userRouter.post('/register', userController.handleSignup);

export { userRouter };