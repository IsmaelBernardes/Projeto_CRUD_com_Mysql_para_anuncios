
//exporta todas as string sql das tabelas inicais que serão criadas apartir desta aplicação;
module.exports = {

    anuncios: `anuncios (
        id int NOT NULL AUTO_INCREMENT, 
        titulo long NOT NULL, 
        descricao text NOT NULL, 
        secaoSelecionada long NOT NULL, 
        dataCriacao TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, 
        dataAtualizacao TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
        versao INTEGER NOT NULL DEFAULT 0, 
        PRIMARY KEY(id)
    )`,
    usuarios: `usuarios (
        id int NOT NULL AUTO_INCREMENT, 
        usuario long NOT NULL, 
        senha long NOT NULL, 
        dataDeNascimento DATE NOT NULL,
        dataCriacao TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, 
        dataAtualizacao TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
        versao INTEGER NOT NULL DEFAULT 0, 
        PRIMARY KEY(id)
    )`   
}