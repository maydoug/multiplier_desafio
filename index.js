const express = require('express');
const port = 3000 ; 
const rotas = require('./src/routes');

const app = express();
app.use(express.json());

app.use(rotas);

app.listen(port, ()=> console.log('Conectado ao servidor'));

module.exports = app ;