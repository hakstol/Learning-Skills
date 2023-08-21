import mongoose from "mongoose";

mongoose.set("strictQuery", true); // Apenas para evitar o warning na console
mongoose.connect("mongodb+srv://hakstol:EssaEuNaoVouEsquecer123@testes.wuwe8yn.mongodb.net/GG-Store?");

let db = mongoose.connection;

export default db;