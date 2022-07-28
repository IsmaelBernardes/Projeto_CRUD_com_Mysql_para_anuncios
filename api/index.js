const customExpress = require('./config/customExpress');
const config = require('config');
const conexao = require('./infraestutura/conexao');
const criarTabelas = require('./infraestutura/tabelas/criarTabelas');

conexao().connect((err) => {

    if(err){
        console.log(err);
    }else{

        console.log('Banco de dados conectado com sucesso;')
        
        criarTabelas(conexao);

        const app = customExpress();

        app.listen(config.get('api.porta'), () => console.log('Servidor rodando na porta: 3000;'));
    }
})