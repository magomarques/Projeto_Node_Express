// Definir as rotas (localhost:3000/...):

// Importar:
const Atendimento = require('../models/atendimentos')

// Exportar:
module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos GET'))

    app.post('/atendimentos', (req, res) => {
        //console.log(req.body)

        const atendimento = req.body
        Atendimento.adiciona(atendimento, res)

        //res.send('Você está na rota de atendimentos POST')
    })
}
