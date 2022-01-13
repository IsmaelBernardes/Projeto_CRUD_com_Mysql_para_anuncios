
//exporta todas as string sql das tabelas inicais que serão criadas apartir desta aplicação;
module.exports = {

    anuncios: 'CREATE TABLE IF NOT EXISTS anuncios (id int NOT NULL AUTO_INCREMENT, titulo varchar(50) NOT NULL, descricao text, secaoSelecionada varchar(15), dataCriacao TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, dataAtualizacao TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, versao INTEGER NOT NULL DEFAULT 0, PRIMARY KEY(id))'
    
}