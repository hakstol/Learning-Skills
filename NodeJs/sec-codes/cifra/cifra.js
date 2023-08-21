// // Cifrar
// const senhaSecreta = "alura";

// function cifrarMensagem(mensagem, movimentos) {
//     const mensagemCifrada = mensagem.split('').map((caractere) => {
//         const codigoCaractere = caractere.charCodeAt(0); // Pega o index Unicode e armazena em codigoCaractere 
//         return String.fromCharCode(codigoCaractere + movimentos) // Retorna o valor desse index armazenado na variável codigoCaracte em formato de string
//     })
//     return mensagemCifrada.join("")
// }

// const mensagemCifrada = cifrarMensagem(senhaSecreta, 4);

// console.log(mensagemCifrada)

// // Decifrar
// function decifrarMensagem(mensagem, movimentos) {
//     const mensagemCifrada = mensagem.split('').map((caractere) => {
//         const codigoCaractere = caractere.charCodeAt(0);
//         return String.fromCharCode(codigoCaractere - movimentos)
//     })

//     return mensagemCifrada.join("")
// }

// const mensagemDecifrada = decifrarMensagem(mensagemCifrada, 4);

// console.log(mensagemDecifrada)

