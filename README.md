
<h3 align="center">
  <img src="https://user-images.githubusercontent.com/60147880/142212159-e240e28e-a2cc-45d9-b4d9-e646fe256c37.png" marginTop="100px" width="400px"/>
</h3> 
<h2> <img src= "https://img.icons8.com/plasticine/2x/rocket.png" width="50px" height="50px" align="center"/> O que é o GoFinances?</h2>

<p>É uma aplicação para armazenar transações financeiras de entrada e saída, que deve permitir o cadastro e a listagem dessas transações.</p>

<h2> <img src="https://i.dlpng.com/static/png/6577858_preview.png" width="50px" align="center"/> Como usar?</h2>

### Pré-requisitos

É necessário ter instalado na sua máquina para execução desse projeto:
- NodeJS
- Gerenciador de pacotes (Npm ou Yarn)

### ♊ Clonando o Repositório

```bash

$ git clone https://github.com/leonaardomuller/gofinances.git

# entre na pasta do projeto

$ cd gofinances

```
### 💻 Rodando o GoFinances

Entre na pasta

```bash

$ cd frontend

```
Instale as dependências

```bash

$ yarn

# ou, caso use npm

$ npm install

```

Rode a aplicação

```bash

$ yarn start

# ou, caso use npm

$ npm start

```

### 🌐 Rodando o Servidor

Entre na pasta

```bash

$ cd backend

```
Instale as dependências

```bash

$ yarn

# ou, caso use npm

$ npm install

```

Rode o servidor

```bash

$ yarn dev:server

# ou, caso use npm

$ npm dev:server

```
<p>Para criar uma transação devera usar uma plataforma API (Insomnia ou Postman) </p>
<p>E executar uma requisição do tipo POST na rota "http://localhost:3333/transactions" informando o title, o value e o type (income/outcome) como no formato abaixo.</p>

```bash

{
  "title": "Salário",
  "value": 3000,
  "type": "income"
}

```

 <h2><img src="https://static.thenounproject.com/png/25759-200.png"width="50px" height="50px" align="center"/> Resultados</h2>

 <h3> GoFinance - Web</h3>
<img src ="https://user-images.githubusercontent.com/60147880/142217942-03c79ef4-3be6-4897-806f-ac797b7a000c.PNG"/>


