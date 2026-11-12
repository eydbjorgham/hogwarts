import { pool } from "../db.js";

export async function getAllTeachers() {
  const result = await pool.query("SELECT * FROM teachers");
  return result.rows;
}

export async function getTeacherById(id) {
  const one = await pool.query("SELECT * FROM teachers WHERE id = $1", [id]);

  if (one.rowCount === 0) {
    return null;
  } else {
    return one.rows[0];
  }
}

export async function updateTeacher(id, name, house_id) {
  const result = await pool.query("UPDATE teachers SET name = $1, house_id = $2 WHERE id = $3", [name, house_id, id]);
  return result.rowCount;
}

export async function createTeacher(name, house) {
  await pool.query("INSERT INTO teachers (name, house) VALUES ($1, $2)", [name, house]);
}

export async function deleteTeacher(id) {
  const result = await pool.query("DELETE FROM teachers WHERE id = $1", [id]);
  return result.rowCount;
}
