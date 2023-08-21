import jwt from 'jsonwebtoken';
import { decode } from 'jsonwebtoken';

// Conteúdo do token
const conteudo = "teste";

// Assinatura do token 
const token = jwt.sign(
    {
        iss: "portswigger",
        sub: "administrator"
    }, conteudo
)

// Verifca a veracidade do token JWT retornando true ou false
const verificaToken = jwt.verify(token, conteudo);

// Resultado
// console.log(token);
// console.log(verificaToken);

var teste = decode('eyJraWQiOiJhYTliODg5Zi04MWE3LTRkNGEtODg0MC04NzhmZjU3ZDdlOWEiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJwb3J0c3dpZ2dlciIsInN1YiI6IndpZW5lciIsImV4cCI6MTY5MTYwOTg0Nn0.yOoGbTDk5rUF5SfNk6gtpLvjXug49CusQUDKWDO-eGY:secret1')
console.log(teste);