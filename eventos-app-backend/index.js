const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const rotasEventos = require('./src/rotas/rotasEventos');

const port = 3001;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(rotasEventos);

app.listen(port, () => console.log(`Executando na porta ${port}`));
