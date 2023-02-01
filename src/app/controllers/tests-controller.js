const csv = require('fast-csv');
const { Test } = require('../models');
const path = require("path");
const fs = require('fs');

exports.upload = (req, res) => {
  res.render('lab-upload-file');
}

exports.uploadFile = async (req, res) => {
 
  let tests = [];
  const filePath = path.join(__dirname, '../../../uploads/' + req.file.filename);
  
  await fs.createReadStream(filePath)
  .pipe(csv.parse({ delimiter: ';', skipRows: 1 }))
  .on("error", (error) => {
    throw error.message;
  })
  .on("data", (row) => {
    let object = {
      patient_registration_number: row[0],
      patient_name: row[1],
      patient_email: row[2],
      patient_birthday: row[3],
      patient_address: row[4],
      patient_city: row[5],
      patient_state: row[6],
      doctor_license: row[7],
      doctor_license_state: row[8],
      doctor_name: row[9],
      doctor_email: row[10],
      test_token: row[11],
      test_date: row[12],
      test_type: row[13],
      test_limits: row[14],
      test_result: row[15]
    }
    tests.push(object);
  })
  .on("end", () => {
    console.log(tests)
    Test.bulkCreate(tests)
    .then(() => {
      res.status(200).send({
        message: "Os registros foram atualizados com sucesso",
      });
    })
    .catch((error) => {
      res.status(500).send({
        message: "Não foi possível atualizar os registros",
        error: error.message,
      });
    });
  });
};

exports.getAllTests = async (req, res) => {
  const data = await Test.findAll();
  res.json(data);
};

exports.searchToken = async (req, res) => {
  console.log(req.params)
  const token = req.params.token;
  const data = await Test.findAll({
    where: {
      test_token: token,
    },
  });
  const form_data = {
    token: rows[0].test_token,
    data do exame: rows[0].test_date,
    cpf: rows[0].patient_registration_number,
    nome: rows[0].patient_name,
    email: rows[0].patient_email,
    data de nascimento: rows[0].patient_birthday,
    médico: {
      crm: rows[0].doctor_license,
      crm/estado: rows[0].doctor_license_state,
      nome: rows[0].doctor_name
    },
    exames: {}

  }
  console.log(data[2])
  res.json(data);
};
"doctor": {
  "crm":"B000B7CDX4",
  "crm_state":"SP",
  "name":"Sra. Calebe Louzada"
},
"tests":[
  {
     "type":"hemácias",
     "limits":"45-52",
     "result":"48"
  },
  {
     "type":"leucócitos",
     "limits":"9-61",
     "result":"75"
  },