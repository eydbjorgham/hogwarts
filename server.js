import express from "express";
import { pool } from "./db.js";

import housesRouter from "./routers/houses.router.js";
import studentsRouter from "./routers/students.router.js";
import teachersRouter from "./routers/teachers.router.js";
import coursesRouter from "./routers/courses.router.js";
import errorhandler from "./errorhandling/errorhandler.js";

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

// Routers
app.use(housesRouter);
app.use(studentsRouter);
app.use(teachersRouter);
app.use(coursesRouter);

app.use(errorhandler);
