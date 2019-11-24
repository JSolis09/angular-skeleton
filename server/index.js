const express = require('express');
const health = require('./health');

const app = express();

app.use(express.json());

app.use('/health', health);

app.get('/', (req, res) => {
  res.redirect('/health');
});

app.listen(3000, () => {
  console.log('El servidor está inicializado en el puerto 3000');
});