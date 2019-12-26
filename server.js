require('dotenv/config');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
/**
 * iniciando o App
 */
const app = express();
app.use(express.json());
app.use(cors());

/**
 * iniciando o banco de dados mogodb
 */
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

/**
 * Carrega os Schemas
 */
requireDir('./src/models');

/**
 * iniciando as rotas
 */
app.use('/api', require('./src/routes'));

/**
 * startando servidor na porta indicada
 */
app.listen(3000);
