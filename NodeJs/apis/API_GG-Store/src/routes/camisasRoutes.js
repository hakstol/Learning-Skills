import express from "express";
import CamisaController from '../controllers/camisasController.js';

const router = express.Router();

router
    .get('/camisas', CamisaController.listarCamisas)
    .get('/camisas/:id', CamisaController.listarCamisasPorID)
    .post('/camisas', CamisaController.cadastrarCamisa)
    .put('/camisas/:id', CamisaController.atualizarCamisa)
    .delete('/camisas/:id', CamisaController.deletarCamisa)

export default router;