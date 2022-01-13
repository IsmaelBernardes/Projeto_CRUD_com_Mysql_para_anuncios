const conexao = require("../infraestutura/conexao");

const conectaTabela = (sql, id) => {

    conexao().query(sql, (err) => {

        if(err){
            
            throw new Error(err);
        }else{

            console.log(`Tabela de ${id} conectada/criada;`);
        }
    });
}

const pegarDados = (sql, res) => {

    conexao().query(sql, (erro, resposta) => {
        
        if(erro){
            
            res.status(400).json(erro);
        }else{
            
            res.status(200).json(resposta);
        }
    });
}

const inserirDados = (sql, dadoComData, res) => {

    conexao().query(sql, dadoComData, (erro, resposta) => {
        
        if(erro){
            
            res.status(400).json(erro);
        }else{
            
            res.status(201).json(resposta);
        }
    });
}

module.exports = {
    conectaTabela,
    pegarDados,
    inserirDados
}