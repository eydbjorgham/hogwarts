import { pool } from "../db.js";

export async function getAllCourses() {
  const result = await pool.query("SELECT * FROM courses");
  return result.rows;
}

export async function getCourseById(id) {
  const one = await pool.query("SELECT * FROM courses WHERE id = $1", [id]);

  if (one.rowCount === 0) {
    return null;
  } else {
    return one.rows[0];
  }
}

export async function createCourse(name, teacher) {
  await pool.query("INSERT INTO courses (name, teacher) VALUES ($1, $2)", [name, teacher]);
}

export async function updateCourse(id, name, teacher) {
  const result = await pool.query("UPDATE courses SET name = $1, teacher = $2 WHERE id = $3", [name, teacher, id]);
  return result.rowCount;
}

export async function deleteCourse(id) {
  const result = await pool.query("DELETE FROM courses WHERE id = $1", [id]);
  return result.rowCount;
}

export async function addStudentToCourse(courseId, studentId) {
  const result = await pool.query("INSERT INTO courses_students (course_id, student_id) VALUES ($1, $2)", [courseId, studentId]);
  return result.rowCount;
}

export async function removeStudentFromCourse(courseId, studentId) {
  const result = await pool.query("DELETE FROM courses_students WHERE course_id = $1 AND student_id = $2", [courseId, studentId]);

  return result.rowCount;
}

export async function updateCourseTeacher(courseId, teacherId) {
  const result = await pool.query("UPDATE courses SET teacher_id = $1 WHERE id = $2", [teacherId, courseId]);

  return result.rowCount;
}
