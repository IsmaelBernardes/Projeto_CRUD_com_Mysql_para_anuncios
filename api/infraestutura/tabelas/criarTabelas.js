const queryConnection = require('../../bancoDeDados/consultaConexao');
const sqlTabelas = require('./index');

//faz solicitação ao banco de dados para a conexão/criação de todas as tabelas necessárias;
module.exports = () => {

    for(const tabela in sqlTabelas){
        queryConnection.consultaTabela(`CREATE TABLE IF NOT EXISTS ${sqlTabelas[tabela]}`).then(() => {
            
            console.log(`Tabela de ${tabela} conectada/criada;`);
        }).catch(console.log);
    }
}