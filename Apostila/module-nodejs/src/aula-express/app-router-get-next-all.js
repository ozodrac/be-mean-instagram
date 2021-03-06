'use strict';

const express = require('express');
const app = express();
const router = express.Router();

// Cria o módulo de roteamento
router.all('*', (req, res, next) => {
  res.setHeader('Webschool', 'FODA');
  console.log('Hello World');
  next();
});

router.get('/', (req, res) => {
  res.send('Listagem');
  console.log('Listagem');
});

// Passa o módulo para a URL /hello
app.use('/hello', router);

app.listen(3000, () => {
  console.log('Servidor rodando em localhost:3000');
});