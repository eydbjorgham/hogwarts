import express from "express";

import { getAllStudents, getSingleStudent, createStudent, updateStudent, deleteStudent } from "../controllers/student.controller.js";

const router = express.Router();

router.get("/students", getAllStudents);
router.get("/students/:id", getSingleStudent);
router.post("/students", createStudent);
router.put("/students/:id", updateStudent);
router.delete("/students/:id", deleteStudent);

export default router;
