const request = require("supertest");
const app = require('../../src/app');
const { Test } = require('../../src/app/models');
const truncate = require('../utils/truncate');

describe('Endpoint: post | update-file', () => {
  beforeEach(async () => {
    await truncate();
  });
  
  it('should upload csv file', async () => {
    
    const json_data = [{one_test}, {other_test}]

    const response = await request(app)
      .get("/all-tests")

    expect(response.status).toBe(200);
    expect(response.json).toEqual(json_data)
  });
});

