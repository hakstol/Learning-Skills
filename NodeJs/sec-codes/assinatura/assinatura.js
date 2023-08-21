import { generateKeyPairSync, createSign, createVerify } from 'crypto'

// generateKeyPairSync: Permite gerar as chaves
// createSign: Permite criar as assinaturas
// createVerify: Permite usar o verificador para validar as assinaturas

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

// Conteúdo a ser assinado
let dados = "Essa string vai ser assinada!"

// Define o metódo que vai assinar o conteúdo
const assinador = createSign('rsa-sha256');

// Assina o conteúdo
assinador.update(dados);

// Armazena a assinatura
const assinatura = assinador.sign(privateKey, 'hex');

console.log(`Assinatura:
${assinatura}`);

// Envio desse documento -------- Documento, assinatura e chave pública

const verificador = createVerify('rsa-sha256');

verificador.update(dados);

const ehVerificado = verificador.verify(publicKey, assinatura,'hex');

console.log(ehVerificado)