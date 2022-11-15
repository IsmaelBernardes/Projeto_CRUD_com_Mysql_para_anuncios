12/01/2022 :calendar:
#Servidor propaganda inicializado;
##NodeJS com express;

###Funcionalidades:
 - conexão com o banco de dados Mysql;
 - rotas iniciais para o acesso dos anuncios no banco de dados;
 - automatização de criação das tabelas no banco de dados;
 - verificação de conexão com o banco de dados para o start do servidor;
 - caso a conexão não seja autenticada, o servidor não iniciará;

###Pastas e arquivos criados:
 - api/bancoDeDados/chamadaBancDad.js       
 - api/bancoDeDados/consultaConexao.js      
 - api/config/customExpress.js
 - api/index.js
 - api/infraestutura/conexao/index.js       
 - api/infraestutura/tabelas/criarTabelas.js
 - api/infraestutura/tabelas/index.js       
 - api/rotas/anuncios/index.js
 - api/rotas/index.js
 - api/rotas/pesquisas/index.js
 - api/tratarDados/anuncios/dadosDeSolicitacaoDeEnvio.js