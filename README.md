## node - express - pg - postgres

App para listagem de exames médicos utilizando node.js e postgres, para estudo. Projeto em andamento.

O app tem 3 endpoints, com as seguintes finalidades:

1. fazer upload de arquivo csv para popular/atualizar banco de dados postgres (/uploads)
2. listar todos os exames no banco de dados
3. buscar exames específicos por token

### Para rodar a aplicação:

* fazer o clone do projeto
* npm install
* npx sequelize db:migrate
* npm start

A aplicação roda com banco de dados postgres instalado localmente (setar a configuração). Fazer primeiro o upload do arquivo csv para popular o banco de dados. To do list: dockerizar, estudar jest/supertest para fazer os testes, melhorar o client side.

### **endpoint: post '/uploads'**

Abrir no navegador o arquivo 'upload-file.html' que está na pasta client > views. Selecionar para upload o arquivo 'data.csv' que está na raiz do projeto e clicar em enviar. O servidor vai receber o arquivo e gravar os dados no banco. 

### **endpoint: get '/all-tests'**

Retorna todos os resultados de exames do banco de dados.

Response:
```json
[
    {
        "id": 1,
        "patient_registration_number": "048.973.170-88",
        "patient_name": "Emilly Batista Neto",
        "patient_email": "gerald.crona@ebert-quigley.com",
        "patient_birthday": "2001-03-11",
        "patient_address": "165 Rua Rafaela",
        "patient_city": "Ituverava",
        "patient_state": "Alagoas",
        "doctor_license": "B000BJ20J4",
        "doctor_license_state": "PI",
        "doctor_name": "Maria Luiza Pires",
        "doctor_email": "denna@wisozk.biz",
        "test_token": "IQCZ17",
        "test_date": "2021-08-05",
        "test_type": "hemácias",
        "test_limits": "45-52",
        "test_result": "97",
        "createdAt": "2023-02-02T23:10:55.714Z",
        "updatedAt": "2023-02-02T23:10:55.714Z"
    },
    {
        "id": 2,
        "patient_registration_number": "048.973.170-88",
        "patient_name": "Emilly Batista Neto",
        "patient_email": "gerald.crona@ebert-quigley.com",
        "patient_birthday": "2001-03-11",
        "patient_address": "165 Rua Rafaela",
        "patient_city": "Ituverava",
        "patient_state": "Alagoas",
        "doctor_license": "B000BJ20J4",
        "doctor_license_state": "PI",
        "doctor_name": "Maria Luiza Pires",
        "doctor_email": "denna@wisozk.biz",
        "test_token": "IQCZ17",
        "test_date": "2021-08-05",
        "test_type": "leucócitos",
        "test_limits": "9-61",
        "test_result": "89",
        "createdAt": "2023-02-02T23:10:55.714Z",
        "updatedAt": "2023-02-02T23:10:55.714Z"
    },
    {
        "id": 3,
        "patient_registration_number": "048.973.170-88",
        "patient_name": "Emilly Batista Neto",
        "patient_email": "gerald.crona@ebert-quigley.com",
        "patient_birthday": "2001-03-11",
        "patient_address": "165 Rua Rafaela",
        "patient_city": "Ituverava",
        "patient_state": "Alagoas",
        "doctor_license": "B000BJ20J4",
        "doctor_license_state": "PI",
        "doctor_name": "Maria Luiza Pires",
        "doctor_email": "denna@wisozk.biz",
        "test_token": "IQCZ17",
        "test_date": "2021-08-05",
        "test_type": "plaquetas",
        "test_limits": "11-93",
        "test_result": "97",
        "createdAt": "2023-02-02T23:10:55.714Z",
        "updatedAt": "2023-02-02T23:10:55.714Z"
    }
]
```

### **endpoint: get '/tests/:token'**

Abrir no navegador o arquivo 'token-search.html' que está na pasta client > views e digitar o token IQCZ17 (outras opções: TJUXC2, ST7APU, 7Y35FE). Retorna resultados de exames de um paciente específico através de token de identificação. 

Response:
```json
{
    "token": "IQCZ17",
    "paciente": "Emilly Batista Neto",
    "cpf": "048.973.170-88",
    "email": "gerald.crona@ebert-quigley.com",
    "data_de_nascimento": "2001-11-03",
    "medico": "Maria Luiza Pires",
    "crm": "B000BJ20J4",
    "crm_estado": "PI",
    "resultados": [
        {
            "data_exame": "2021-05-08",
            "tipo": "hemácias",
            "limites": "45-52",
            "resultado": "97"
        },
        {
            "data_exame": "2021-05-08",
            "tipo": "leucócitos",
            "limites": "set/61",
            "resultado": "89"
        },
        {
            "data_exame": "2021-05-08",
            "tipo": "plaquetas",
            "limites": "nov/93",
            "resultado": "97"
        },
        {
            "data_exame": "2021-05-08",
            "tipo": "hdl",
            "limites": "19-75",
            "resultado": "0"
        }
    ]
}
```
