import app from './src/app.js'

const port = 3000; // Define a porta para o servidor

// Define em qual porta vai escutar a requisição
app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`) 
});