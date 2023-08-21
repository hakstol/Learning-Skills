import { createCipheriv, randomBytes, createDecipheriv } from 'crypto';

// --------- Cifrar a chave

// Conteúdo da chave
const mensagem = 'teste';

// Cria chave com número aleatório de bytes 
const chave = randomBytes(32);

// Acrescentar aleatoriedade a chave
const vi = randomBytes(16);

// Cria a cifra da chave
const cifra = createCipheriv('aes256', chave, vi);

// Codifica a mensagem
const mensagemCifrada = cifra.update(mensagem, 'utf-8', 'hex') + cifra.final('hex');

// --------- Decifrar a chave

// Cria a decifra da chave
const decifra = createDecipheriv('aes256', chave, vi);

// Decodifica a mensagem
const mensagemDecifrada = decifra.update(mensagemCifrada, 'hex', 'utf-8') + decifra.final('utf-8');


// Resultado
console.log(`Cifrada: ${mensagemCifrada}`)
console.log(`Decifrada: ${mensagemDecifrada.toString('utf-8')}`);
