import { generateKeyPairSync, publicEncrypt, privateDecrypt  } from 'crypto';

// Cria um par de chaves 

const { privateKey, publicKey } = generateKeyPairSync('rsa',
    {
        modulusLength: 2048,

        publicKeyEncoding: {
            type: 'spki',
            format: 'pem',
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem',
        },
    }
)

// Criptografa a mensagem

const dadosCriptografados = publicEncrypt(
    publicKey,
    Buffer.from("Mensagem")
);

console.log(`Dados cifrados: ${dadosCriptografados.toString('hex')}`);

// Descriptografa a mensagem

const dadosDecifrados = privateDecrypt(
    privateKey,
    dadosCriptografados
);


// Resultado
console.log(`Dados decifrados: ${dadosDecifrados.toString('utf-8')}`);