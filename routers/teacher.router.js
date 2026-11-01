import express from "express";

import { getAllTeachers, getSingleTeacher, createTeacher, updateTeacher, deleteTeacher } from "../controllers/teacher.controller.js";

const router = express.Router();

router.get("/teacher", getAllTeachers);
router.get("/teacher/:id", getSingleTeacher);
router.post("/teacher", createTeacher);
router.put("/teacher/:id", updateTeacher);
router.delete("/teacher/:id", deleteTeacher);

export default router;
