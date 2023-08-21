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

const usuario = new Usuario('teste', '3743'); // Cria uma instância do usuário preenchendo os parâmetros

for (let senhaTeste=0 ; senhaTeste < 10000 ; senhaTeste++){
    if (usuario.autentica("teste", senhaTeste.toString())){
        console.log(`A senha do usuário é ${senhaTeste}`)
    }
}