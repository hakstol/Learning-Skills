import { scryptSync, randomBytes, timingSafeEqual } from 'crypto';

function criaHashComSal(senha) {

    // Gera um número de bytes aleatórios 
    const sal = randomBytes(16).toString('hex');

    // Recebe a senha e o sal e transforma em uma senha hasheada
    const senhaHasheada = scryptSync(senha, sal, 64).toString('hex');

    return `${sal}:${senhaHasheada}`;
}

class Usuario{
    constructor(nome, senha){
        this.nome = nome;
        [this.sal, this.hash] = criaHashComSal(senha).split(':')
    }
    autentica(nome, senha){
        if (nome === this.nome){
            
            // Gerar outra hash para teste
            const testeHash = scryptSync(senha, this.sal, 64);
            
            // Colocar a hash no mesmo tamanho
            const hashReal = Buffer.from(this.hash, 'hex');

            // Comparar duas hashes
            const hashesCorrespondem = timingSafeEqual(testeHash, hashReal);

            if (hashesCorrespondem){
                console.log("Usuário autenticado com sucesso");
                return true;
            }
        }

        console.log("Usuário ou senha incorretos.");
        return false;
    }
}

const teste = new Usuario('teste', 'senha');

// Teste de sucesso
teste.autentica('teste', 'senha');

// Testes de insucesso
teste.autentica('Teste', 'senhaSecreta');
teste.autentica('teste', 'senhaErrada');