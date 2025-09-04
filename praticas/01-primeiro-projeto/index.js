//importar o express
const express = require('express')

// crio uma instãncia(express) da minha aplicação 
const app = express()
// guardar o número da porta que vai ser alocada 
const porta = 3000 

// Middlewares (Intermediários)
app.use((req, res, next) => {
    console.log("Time: ", new Date().toLocaleString())
    console.log("Metodo: ", req.method)
    console.log("Rota: ", req.url)
    next()
})

app.get('/teste' , (req, res, next) => {
    res.send("TESTE TESTANDO 123!!!")
})

app.get('/teste' , (req, res, next) => {
    res.send("TESTE TESTANDO 123!!!")
})

// executa a aplicação 
app.listen(porta, () => {
    //imprimo uma mensagem pra confirmar que a aplicação está fucionando (rodando na porta escolhida)
    console.log("aplicação rodando em http://localhost:3000")
}