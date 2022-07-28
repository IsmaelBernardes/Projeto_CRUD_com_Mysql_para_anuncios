
const queryConnection = require('./consultaConexao');

const adiciona = (dados, nomeTab) => {

    const sql = `INSERT INTO ${nomeTab} SET ?`;

    return queryConnection.inserirDados(sql, dados);
}

const lista = (nomeTab) => {
    
    const sql = `SELECT * FROM ${nomeTab}`;

    return queryConnection.consultaTabela(sql);
}

const buscaId = (id, nomeTab) => {
    
    const sql = `SELECT * FROM ${nomeTab} WHERE id=${id}`;
    
    return queryConnection.consultaTabela(sql);
}

const deleta = (id, nomeTab) => {

    const sql = `DELETE FROM ${nomeTab} WHERE id=${id}`;

    return queryConnection.consultaTabela(sql);
}

const atualiza = (dados, id, nomeTab) => {

    const sql = `UPDATE ${nomeTab} SET ? WHERE id=${id}`;

    return queryConnection.inserirDados(sql, dados);
}

module.exports = {
    adiciona,
    lista,
    buscaId,
    deleta,
    atualiza
}