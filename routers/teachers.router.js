import express from "express";

import { getAllTeachers, getSingleTeacher, createTeacher, updateTeacher, deleteTeacher } from "../controllers/teacher.controller.js";

const router = express.Router();

router.get("/teachers", getAllTeachers);
router.get("/teachers/:id", getSingleTeacher);
router.post("/teachers", createTeacher);
router.put("/teachers/:id", updateTeacher);
router.delete("/teachers/:id", deleteTeacher);

export default router;
