import express from "express";
import { pool } from "./db.js";

import housesRouter from "./routers/houses.router.js";
import studentsRouter from "./routers/student.router.js";
import teachersRouter from "./routers/teacher.router.js";
import coursesRouter from "./routers/course.router.js";

const app = express();
app.use(express.json());

// Routers
app.use(housesRouter);
app.use(studentsRouter);
app.use(teachersRouter);
app.use(coursesRouter);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
