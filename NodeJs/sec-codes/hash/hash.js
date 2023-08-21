import { createHash } from 'crypto'

function criaHash(senha){
    return createHash('sha256').update(senha).digest('hex') // Define o tipo da criptografia e criptografa
}

console.log(criaHash("teste"));

class Usuario{
    constructor(nome, senha){
        this.nome = nome;
        this.hash = criaHash(senha);
    }

    autentica(nome, senha){
        if (nome === this.nome && this.hash === criaHash(senha)){
            console.log("Usuário autenticado")
            return true;
        } 

        console.log("Usuário ou senha incorretos")
        return false;
    }
}

const usuario = new Usuario('teste', 'senha'); // Cria uma instância do usuário preenchendo os parâmetros

usuario.autentica('teste', 'senha'); 