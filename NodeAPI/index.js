import express from 'express'
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';

// const express = require('express') // A variável express vai armazenar toda a chamada da biblioteca Express
// const morgan = require('morgan') // A variável morgan vai armazenar toda a chamada da biblioteca Morgan
// const cors = require('cors') // A variável cors vai armazenar toda a chamada do pacote de CORS
// const bodyParser = require('body-parser') // A variável bodyParser vai armazenar toda a chamada da biblioteca Body-Parser
// const swaggerUi = require('swagger-ui-express')

import swaggerDocs from './swagger.json' assert {type: "json"};

const app = new express()

app.use(morgan('dev')) // Para receber o log de execução
app.use(bodyParser.urlencoded({ extended: false })) // 
app.use(express.json()) // Para definir que a resposta seja em JSON
app.use(cors()) // Pode receber um domínio específico de acesso
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

let db = [
    {
        '1': {
            Nome: 'Cliente 1', Idade: '21'
        }
    },
    {
        '2': {
            Nome: 'Cliente 2', Idade: '22'
        }
    },
    {
        '3': {
            Nome: 'Cliente 3', Idade: '23'
        }
    }
]

app.get('/users', (request, response) => {
    return response.json(db)
})


//Inicia o servidor em uma determinada porta com uma função de callback para sinalizar o resultado no console
app.listen(3000, () => { console.log('Running in http://localhost:3000/docs')})

    