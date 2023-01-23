const Pool = require('pg').Pool

const pool = new Pool({
  host: 'localhost',
  database: 'postgres',
  user: 'database',
  password: 'password',
  port: 5432,
});

module.exports = pool;