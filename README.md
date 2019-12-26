# NODE, API, CRUD, MONGODB
Aplicação simples em NodeJS mongodb.

## Banco de dados

Ultilizando mongoDB para aplicação, rodando no [DOCKER](https://www.docker.com/get-started).

command para criação do container 

`docker run --name mongonode -p 27018:27017 -d -t mongo`

## Dependências

- cors,
- dotenv,
- express,
- mongoose,
- mongoose-paginate,
- require-dir

## Rodar a aplicação

### Na pasta raiz rode os comandos no seu terminal para instalar as dependências 

`yarn install`

ou

`npm install`

### Certifique do o banco de dados esteja rodado 

use o commando para listar os containers que estão rodando

`docker ps` 

se não estiver use o comando rodar o container mongonode 

`docker start mongonode` 
