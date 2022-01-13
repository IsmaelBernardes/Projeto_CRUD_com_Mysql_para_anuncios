const queryConnection = require('./consultaConexao');


const adiciona = (dados, res, nomeTab) => {

    const sql = `INSERT INTO ${nomeTab} SET ?`;
    queryConnection.inserirDados(sql, dados, res);
}

const lista = (res, nomeTab) => {
    
    const sql = `SELECT * FROM ${nomeTab}`;
    queryConnection.pegarDados(sql, res);
}

const buscaId = (id, res, nomeTab) => {
    
    const sql = `SELECT * FROM ${nomeTab} WHERE id=${id}`;
    queryConnection.pegarDados(sql, res);
}

const deleta = (id, res, nomeTab) => {

    const sql = `DELETE FROM ${nomeTab} WHERE id=${id}`;
    queryConnection.pegarDados(sql, res);
}

const atualiza = (dados, id, res, nomeTab) => {

    const sql = `UPDATE ${nomeTab} SET ? WHERE ?`;
    queryConnection.inserirDados(sql, [dados, id], res);
}

module.exports = {
    adiciona,
    lista,
    buscaId,
    deleta,
    atualiza
}