// Definir as rotas (localhost:3000/...):

// Importar:
const atendimentos = require('../models/atendimentos')
const Atendimento = require('../models/atendimentos')

// Exportar:
module.exports = app => {

    app.get('/atendimentos', (req, res) => {
        
        Atendimento.lista(res)

       //res.send('Você está na rota de atendimentos GET'))
    })

    app.get('/atendimentos/:id', (req, res) => {
        
        const id = parseInt(req.params.id)
        
        Atendimento.buscaPorId(id, res)

    })

    app.post('/atendimentos', (req, res) => {
        //console.log(req.body)

        const atendimento = req.body

        Atendimento.adiciona(atendimento, res)

        //res.send('Você está na rota de atendimentos POST')
    })

    app.patch('/atendimentos/:id', (req, res) => {

        const id = parseInt(req.params.id)

        const valores = req.body

        Atendimento.altera(id, valores, res)

    })

    app.delete('/atendimentos/:id', (req, res) => {

        const id = parseInt(req.params.id)

        Atendimento.deleta(id, res)

    })
}
