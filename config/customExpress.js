// Importar:
const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')


// Exportar:
module.exports = () => {

    // Criar app e executar o servidor:
    const app = express()

    // Configurar para receber dados via POST:
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())
    
    // Configurar incluir controllers:
    consign()
        .include('controllers')
        .into(app)

    return app
}
