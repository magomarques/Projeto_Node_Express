// Importar:
const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Atendimento {

    adiciona(atendimento, res){

        //const dataCriacao = new Date()
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')

        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        const atendimentoDatado = {...atendimento, dataCriacao, data}

        const sql = 'INSERT INTO Atendimentos SET ?'

        conexao.query(sql, atendimentoDatado, (erro, resultados) => {
            if (erro) {
                //console.log(erro)
                res.status(400).json(erro)
            } else {
                //console.log(resultados)
                res.status(201).json(resultados)
            }
        })
    }

}

module.exports = new Atendimento