import express from 'express'
import conectarNoDB from './config/dbConnect.js'
import routes from './routes/index.js'

// Conectar com o banco de dados
const conexao = await conectarNoDB()

conexao.on("error", (erro) => {
    console.error("Erro de conexão", erro)
})

conexao.once("open", () => {
    console.log("Conexão com o db feita com sucesso!");
})


// Usando o Framework Express
const app = express()
routes(app)

// Rota para buscar um livro específico por id


// Rota POST para adicionar um novo livro


// Método PUT para ALTERAR um livro já existente


// Método DELETE para excluir um livro
app.delete("/livros/:id", (req, res) => {
    const index = buscarLivro(req.params.id)
    livros.splice(index, 1)
    res.status(200).send("Livro removido com sucesso")
})


export default app;