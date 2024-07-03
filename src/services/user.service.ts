import { pool } from '../db/db'

export class UserService {
  static async createUser(userData) {
    const { name, email, password } = userData;
    // TODO - change this value
    const result = await pool.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
      [name, email, password]
    );
    return result.rows[0];
  }

  static async getAllUsers() {
    const result = await pool.query('SELECT * FROM users');
    return result.rows;
  }

  static async getUserById(id) {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async updateUser(id, userData) {
    const { name, email, password } = userData;
    const result = await pool.query(
      'UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4 RETURNING *',
      [name, email, password, id]
    );
    return result.rows[0];
  }

  static async deleteUser(id) {
    const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  }
}