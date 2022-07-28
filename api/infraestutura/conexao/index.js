const mysql = require('mysql2');
const config = require('config');

//cria conexão com banco de dados, armazena em uma variavél e retorna a conexão;
module.exports = () => {

    const conexao = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: config.get('mysql.usuario'),
        password: config.get('mysql.senha'),
        database: config.get('conexao.dadospropaganda')
    });

    return conexao;
}