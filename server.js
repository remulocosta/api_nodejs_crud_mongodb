require('dotenv/config');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(process.env.MONGO_URL);
});

app.listen(3000);