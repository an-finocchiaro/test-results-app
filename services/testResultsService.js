const Pool = require('pg').Pool;
const pool = require('../db/connection');
const { readFile, fs } = require('fs');
const fileOutput = require('./readCsvData');
var dataJson;

//busca inicial para testar db
exports.getDbTest = (request, response) => {
  pool.query('SELECT * FROM people', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

//endpoint '/csv-file' --- expõe arquivo data.csv no formato json
exports.getCsvFile = (request, response) => {
  readFile('data.json', (err, data) => {
    if (err) throw err;
    dataJson = data;
  })
  response.writeHead(200, {'Content-Type': 'application/json'});
  response.end(dataJson);
}
  

//endpoint /test-results: busca no db dados obtidos pelo arquivo csv
/*exports.getTestResultsData = (request, response) => {
  pool.query('SELECT * FROM tests)
}*/
