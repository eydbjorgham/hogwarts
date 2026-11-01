import express from "express";

import { getAllCourses, getSingleCourse, createCourse, updateCourse, deleteCourse, addStudentToCourse, removeStudentFromCourse, updateCourseTeacher } from "../controllers/course.controller.js";

const router = express.Router();

router.get("/courses", getAllCourses);
router.get("/courses/:id", getSingleCourse);
router.post("/courses", createCourse);
router.put("/courses/:id", updateCourse);
router.delete("/courses/:id", deleteCourse);
router.post("/courses/:courseId/students/:studentId", addStudentToCourse);
router.delete("/courses/:courseId/students/:studentId", removeStudentFromCourse);
router.put("/courses/:courseId/teacher", updateCourseTeacher);

export default router;
