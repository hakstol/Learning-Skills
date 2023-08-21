import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        timePreferido: {type: String, required: true},
        qntdCamisas: {type: Number},
        tel: {type: Number, required: true},
        admin: {type: Boolean, required: true}
    },
    {
        versionKey: false
    }
)

const usuarios = mongoose.model('usuarios', usuarioSchema);

export default usuarios;