import React from 'react';
import express from 'express';
import camisas from './camisasRoutes.js';
import usuarios from './usuarioRoutes.js';
import apps from '../app.js';

const route = (apps) => {

    apps.use(
        express.json(),
        camisas,
        usuarios
    )
};

export default route;