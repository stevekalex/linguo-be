const { Pool } = require('pg');

export const pool = new Pool({
  user: 'your_username',
  host: 'localhost',
  database: 'flashcard_app',
  password: 'your_password',
  port: 5432,
});
