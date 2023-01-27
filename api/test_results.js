/*const Pool = require('pg').Pool;
const pool = require('../db/connection');
const { readFile, fs } = require('fs');
const csvToJson = require('convert-csv-to-json');
const fileInput = './uploads/data.csv';
const fileOutput = './uploads/data.json';
var dataJson;

csvToJson.generateJsonFileFromCsv(fileInput,fileOutput);

//endpoint (/test_results)
exports.test_results = async (request, response) => {
  
  try {
    await readFile('./uploads/data.json', (err, data) => {
      if (err) throw err;
      dataJson = data;
    })
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(dataJson);
  } catch (err) {
    console.log(err)
  }
}
  

//endpoint /test-results: busca no db dados obtidos pelo arquivo csv
/*exports.getTestResultsData = (request, response) => {
  pool.query('SELECT * FROM tests)
}

//busca inicial para testar db
exports.getDbTest = (request, response) => {
  pool.query('SELECT * FROM people', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}*/


