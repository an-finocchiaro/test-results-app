const request = require('supertest');
const app = require('../app');

describe('testando os endpoints da aplicação', () => {

  it('testa endpoint /hello', async () => {
    const res = await request(app).get('/hello')
    expect(res.status).toEqual(200)
    expect(res.text).toContain("Hello world")
  })

  it('testa endpoint /test_results', async () => {
    const res = await request(app).get('/test_results')
    expect(res.status).toEqual(200)
    expect(res.type).toEqual('application/json')
  })
})
