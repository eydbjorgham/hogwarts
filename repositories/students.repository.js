import { pool } from "../db.js";

export async function getAllStudents() {
  const result = await pool.query("SELECT * FROM students");
  return result.rows;
}

export async function getStudentById(id) {
  const one = await pool.query("SELECT * FROM students WHERE id = $1", [id]);

  if (one.rowCount === 0) {
    return null;
  } else {
    return one.rows[0];
  }
}

export async function createStudent(name, house) {
  await pool.query("INSERT INTO students (name, house) VALUES ($1, $2)", [name, house]);
}

export async function updateStudent(id, name, house) {
  const result = await pool.query("UPDATE students SET name = $1, house = $2 WHERE id = $3", [name, house, id]);
  return result.rowCount;
}

export async function deleteStudent(id) {
  const result = await pool.query("DELETE FROM students WHERE id = $1", [id]);
  return result.rowCount;
}
