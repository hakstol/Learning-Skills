import express from "express";
import UsuarioController from '../controllers/usuarios.Controller.js';

const router = express.Router();

router
    .get('/usuarios', UsuarioController.listaUsuarios)
    .get('/usuarios/:id', UsuarioController.listarUsuariosPorID)
    .post('/usuarios', UsuarioController.cadastrarUsuario)
    .put('/usuarios/:id', UsuarioController.atualizarUsuario)
    .delete('/usuarios/:id', UsuarioController.deletarUsuario)

export default router;