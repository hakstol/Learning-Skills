import { createHash } from 'crypto'

class Usuario{
    constructor(nome, senha){
        this.nome = nome;
        this.hash = this.criaHash(senha);
    }

    criaHash(senha){
        return createHash('sha256').update(senha).digest('hex') // Define o tipo da criptografia e criptografa
    }

    autentica(nome, senha){
        if (nome === this.nome && this.hash === this.criaHash(senha)){
            console.log("Usuário autenticado")
            return true;
        } 

        // console.log("Usuário ou senha incorretos")
        return false;
    }
}

const usuario = new Usuario('teste', 'senha123'); // Cria uma instância do usuário preenchendo os parâmetros

// Array de possibilidades de senhas
const senhasComuns = ["senha", "123456", "senha123", "admin", "blink182","meuAniversario", "senha123456", "brasil", "102030"]

// Percorre a lista de senha buscando a do usuário
senhasComuns.map( senha => {
    if(usuario.autentica("teste", senha)){
        console.log(`A senha do usuário é ${senha}`)
    }
})
