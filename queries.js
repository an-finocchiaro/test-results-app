const Pool = require('pg').Pool
const pool = require('./db/connection')

exports.getTests = (request, response) => {
  pool.query('SELECT * FROM people', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
