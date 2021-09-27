// Incluir configurações de conexão:

// Importar o mySQL:
const mysql = require('mysql')

// Criar e configurar conexão:
const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin',
    database: 'projeto-node-express'
})

// Exportar a conexão:
module.exports = conexao
