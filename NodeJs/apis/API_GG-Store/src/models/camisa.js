import mongoose from "mongoose";

const camisaSchema = new mongoose.Schema(
    {
        id: {type: String},
        time: {type: String, required: true},
        tamanho: {type: String, required: true},
        preco: {type: Number, required: true}
    },
    {
        versionKey: false
    }
);


const camisas = mongoose.model('camisas', camisaSchema);

export default camisas;