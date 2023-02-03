## node - express - pg - postgres

App para listagem de exames médicos utilizando node.js e postgres, para estudo.

O app tem 3 endpoints, com as seguintes finalidades:

1. fazer upload de arquivo csv para popular/atualizar banco de dados postgres (/uploads)
2. listar todos os exames no banco de dados
3. buscar exames específicos por token

### Para rodar a aplicação:

* fazer o clone do projeto
* npm install
* npx sequelize db:migrate
* npm start

A aplicação roda com banco de dados postgres instalado localmente (setar a configuração). Pretendo dockerizar em breve.

### **endpoint: post '/uploads'**

Abrir o arquivo 'upload-file.html' que está na pasta client > views. Selecionar para upload o arquivo 'data.csv' que está na raiz do projeto e clicar em enviar. O servidor vai receber o arquivo e gravar os dados no banco.

### **endpoint: get '/all-tests'**

Retorna todos os resultados de exames do banco de dados.  

### **endpoint: get '/tests/:token'**

Abrir o arquivo 'token-search.html' que está na pasta client > views e digitar o token IQCZ17 (outras opções: TJUXC2, ST7APU, 7Y35FE). Retorna resultados de exames de um paciente específico através de token de identificação. 

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
