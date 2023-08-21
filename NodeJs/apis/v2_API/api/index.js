const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const port = 3000;

const restante = 'Futebol Clube';

app.get('/api', (req, res) => res
    .status(200)
    .send(`Santos ${restante}`
));

app.listen(port, () => console.log(`Rodando em http://localhost:${port}/api`))

module.exports = app;