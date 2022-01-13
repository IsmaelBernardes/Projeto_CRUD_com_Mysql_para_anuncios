const queryConnection = require('../../bancoDeDados/consultaConexao');
const sqlTabelas = require('./index');

//faz solicitação ao banco de dados para criação de todas as tabelas necessárias;
module.exports = () => {

    for(const sql in sqlTabelas){
        queryConnection.conectaTabela(sqlTabelas[sql], sql);
    }
}