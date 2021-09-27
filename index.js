// Importar:
const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabelas')

// Conexão com o BD:
conexao.connect(erro => {
    if (erro){
        console.log(erro)
    } else {
        console.log('Conectado ao BD com sucesso')

        // Chamar a classe Tabelas:
        Tabelas.init(conexao)

        // Criar app e executar o servidor:
        const app = customExpress()

        // Subir app no servidor (localhost:3000): 
        app.listen(3000, () => console.log('Servidor rodando na porta 3000'))

     }
})


// SUBIR APP: node index.js
// DERRUBAR APP: Ctrl + C

// NODEMON:
// SUBIR APP: npm start -> rs