require('dotenv/config');
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
/**
 * iniciando o App
 */
const app = express();
app.use(express.json());

/**
 * iniciando o banco de dados mogodb
 */
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

/**
 * Carrega os Schemas
 */
requireDir('./src/models');

const Product = mongoose.model('Product');
/**
 * iniciando as rotas
 */
app.use('/api', require('./src/routes'));

/**
 * startando servidor na porta indicada
 */
app.listen(3000);