const conexao = require("../infraestutura/conexao");

const consultaTabela = (sql) => {

    return conexao()
        .promise()
        .query(sql);
}

const inserirDados = (sql, dado) => {

    return conexao()
        .promise()
        .query(sql, dado);
}

module.exports = {
    consultaTabela,
    inserirDados
}