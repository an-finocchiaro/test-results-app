# node - express - pg - postgres

App para listagem de exames médicos utilizando node.js e postgres, para estudo.
O app tem 3 endpoints:

1. upload de arquivo csv para atualizar banco de dados postgresql
2. listar todos os exames no banco de dados
3. busca de exames por token
* 

## Dependências utilizadas

```json
 "dependencies": {
    "body-parser": "^1.20.1",
    "dotenv": "^16.0.3",
    "ejs": "^3.1.8",
    "express": "^4.18.2",
    "fast-csv": "^4.3.6",
    "multer": "^1.4.5-lts.1",
    "pg": "^8.8.0",
    "sequelize": "^6.28.0"
  },
  "devDependencies": {
    "jest": "^29.4.0",
    "sequelize-cli": "^6.6.0",
    "sqlite3": "^5.1.4",
    "supertest": "^6.3.3"
  }
```


Response:

```json
{
   "result_token":"T9O6AI",
   "result_date":"2021-11-21",
   "cpf":"066.126.400-90",
   "name":"Matheus Barroso",
   "email":"maricela@streich.com",
   "birthday":"1972-03-09",
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
      {
         "test_type":"plaquetas",
         "test_limits":"11-93",
         "result":"67"
      },
      {
         "test_type":"hdl",
         "test_limits":"19-75",
         "result":"3"
      },
      {
         "test_type":"ldl",
         "test_limits":"45-54",
         "result":"27"
      },
      {
         "test_type":"vldl",
         "test_limits":"48-72",
         "result":"27"
      },
      {
         "test_type":"glicemia",
         "test_limits":"25-83",
         "result":"78"
      },
      {
         "test_type":"tgo",
         "test_limits":"50-84",
         "result":"15"
      },
      {
         "test_type":"tgp",
         "test_limits":"38-63",
         "result":"34"
      },
      {
         "test_type":"eletrólitos",
         "test_limits":"2-68",
         "result":"92"
      },
      {
         "test_type":"tsh",
         "test_limits":"25-80",
         "result":"21"
      },
      {
         "test_type":"t4-livre",
         "test_limits":"34-60",
         "result":"95"
      },
      {
         "test_type":"ácido úrico",
         "test_limits":"15-61",
         "result":"10"
      }
   ]
}
```
