import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { initialize} from './middleware/auth.js';
import { userRouter } from './routers/UserRouter.js';
import { CourseRouter } from './routers/CourseRoutes.js';
// import SaveCourseRouter from "./routers/MessageRouter.js";
const app = express();
dotenv.config();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(initialize());
app.use('/api/user', userRouter);
app.use('/api/course', CourseRouter);
// app.use('/api/savecourse', SaveCourseRouter);


app.get('/', (req, res) => {
    res.send({
        message: 'Welcome to this API.',
    })
})

app.get("/ping", (req, res) => {
    res.status(200);
    return res.json("Pong")
});

export default app;