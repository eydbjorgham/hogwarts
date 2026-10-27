import { pool } from "../db.js";

export async function getAllHouses() {
    const result = await pool.query('SELECT * FROM houses');

    return result.rows;
}

// Get single house
export async function getHouseById(id) {
    const one = await pool.query("SELECT * FROM houses WHERE id = $1", [id])

    if (one.rowCount === 0) {
        return null;
    } else {
        return one.rows[0];
    }
}