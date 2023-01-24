const fs = require('fs');
const csvToJson = require('convert-csv-to-json');
const fileInput = './data.csv';
const fileOutput = './data.json';

csvToJson.generateJsonFileFromCsv(fileInput,fileOutput);

exports.module = fileOutput;
