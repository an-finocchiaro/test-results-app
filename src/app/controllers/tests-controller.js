const csv = require('fast-csv');
const { Patient, Doctor, Result, Test } = require('../models');
const path = require("path");
const fs = require('fs');

exports.upload = (req, res) => {
  res.status(200);
}

exports.uploadFile = async (req, res) => {
  let patients = [];
  let newPatients = [];
  let uniquePatient = {};
  let doctors = [];
  let newDoctors = [];
  let uniqueDoctor = {};
  let results = [];
  let tests = [];

  const filePath = path.join(__dirname, '../../../uploads/' + req.file.filename);
  
  await fs.createReadStream(filePath)
  .pipe(csv.parse({ delimiter: ';', skipRows: 1 }))
  .on("error", (error) => {
    throw error.message;
  })
  .on("data", (row) => {
    let testsList = {
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
    let patientsList = {
      registration_number: row[0],
      name: row[1],
      email: row[2],
      birthday: row[3],
      address: row[4],
      city: row[5],
      state: row[6],
      token: row[11],
    }
    let doctorsList = {
      license: row[7],
      license_state: row[8],
      name: row[9],
      email: row[10],
      token: row[11],
    }
    let resultsList = {
      date: row[12],
      type: row[13],
      limits: row[14],
      test_result: row[15],
      token: row[11],
    }
    tests.push(testsList);
    patients.push(patientsList);
    doctors.push(doctorsList);
    results.push(resultsList);
  })
  .on("end", () => {

    for (let i in patients) {
      patientToken = patients[i]['token'];
      uniquePatient[patientToken] = patients[i]
    }
    for (i in uniquePatient) {
      newPatients.push(uniquePatient[i])
    }
  
    for (let i in doctors) {
      doctorToken = doctors[i]['token'];
      uniqueDoctor[doctorToken] = doctors[i]
    }
    for (i in uniqueDoctor) {
      newDoctors.push(uniqueDoctor[i])
    }

    Test.bulkCreate(tests)
    Patient.bulkCreate(newPatients)
    Result.bulkCreate(results)
    Doctor.bulkCreate(newDoctors)
    
    .then(() => {
      res.status(200).send({
        message: 'Registros atualiazdos com sucesso'
      });
    })
    .catch((error) => {
      res.status(500).send({
        message: 'Não foi possível atualizar os registros',
      });
      console.log(error);
    });
  });
};

exports.getAllTests = async (req, res) => {
  const data = await Test.findAll();
  res.json(data);
};

exports.searchToken = async (req, res) => {
  const token = req.params.token;
  const patient = await Patient.findAll({
    where: {
      token: token,
    },
  });
  const doctor = await Doctor.findAll({
    where: {
      token: token,
    },
  });
  const results = await Result.findAll({
    where: {
      token: token,
    },
  });
  const finalResults = [];
  results.forEach(result => {
    const resultData = {
      data_exame: result.date,
      tipo: result.type,
      limites: result.limits,
      resultado: result.test_result
    }
    finalResults.push(resultData);
  })
  
  var jsonData = {
    token: patient[0].token,
    paciente: patient[0].name,
    cpf: patient[0].registration_number,
    email: patient[0].email,
    data_de_nascimento: patient[0].birthday,
    medico: doctor[0].name,
    crm: doctor[0].license,
    crm_estado: doctor[0].license_state,
    resultados: finalResults
  }
    
  res.send(jsonData)
};
