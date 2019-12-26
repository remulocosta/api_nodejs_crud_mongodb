require('dotenv/config');
const express = require('express');
const mongoose = require('mongoose');

/**
 * iniciando o App
 */
const app = express();

/**
 * iniciando o banco de dados mogodb
 */
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

/**
 * iniciando as rotas
 */
app.get('/', (req, res) => {
  res.send(process.env.MONGO_URL);
});

/**
 * startando servidor na porta indicada
 */
app.listen(3000);