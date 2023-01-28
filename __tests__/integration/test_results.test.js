const request = require("supertest");
const app = require('../../src/app');
const { Test } = require('../../src/app/models');
const truncate = require('../utils/truncate');

describe('Endpoint: get | test_results', () => {
  beforeEach(async () => {
    await truncate();
  });
  
  it('should list all test results in database', async () => {
    const one_test = await Test.create({
      patient_registration_number: '048.973.170-88',
      patient_name: 'Emilly Batista Neto',
      patient_email: 'gerald.crona@ebert-quigley.com',
      patient_birthday: '2001-03-11',
      patient_address: '165 Rua Rafaela',
      patient_city: 'Ituverava',
      patient_state: 'Alagoas',
      doctor_license: 'B000BJ20J4',
      doctor_license_state: 'PI',
      doctor_name: 'Maria Luiza Pires',
      doctor_email: 'denna@wisozk.biz',
      test_token: 'IQCZ17',
      test_date: '2021-08-05',
      test_type: 'hdl',
      test_limits: '19-75',
      test_result: '0'
    });

    const other_test = await Test.create({
      patient_registration_number: '048.108.026-04',
      patient_name: 'Juliana dos Reis Filho',
      patient_email: 'mariana_crist@kutch-torp.com',
      patient_birthday: '1995-07-03',
      patient_address: '527 Rodovia Júlio',
      patient_city: 'Lagoa da Canoa',
      patient_state: 'Paraíba',
      doctor_license: 'B0002IQM66',
      doctor_license_state: 'SC',
      doctor_name: 'Maria Helena Ramalho',
      doctor_email: 'rayford@kemmer-kunze.info',
      test_token: '0W9I67',
      test_date: '2021-07-09',
      test_type: 'plaquetas',
      test_limits: '11-93',
      test_result: '18'
    });

    const response = await request(app)
      .get("/test_results")

    expect(response.status).toBe(200);
    expect(response.text).toContain('Hello world')
  });
});

