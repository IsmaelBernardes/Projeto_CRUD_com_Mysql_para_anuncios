const cryptography = require('../../infraestutura/cryptography');

const criar = ({titulo, descricao, secaoSelecionada}) => {
    
    const anuncio = {
        titulo: cryptography.encrypt(titulo),
        descricao: cryptography.encrypt(descricao),
        secaoSelecionada: cryptography.encrypt(secaoSelecionada)
    }

    return anuncio;
}

module.exports = {
    criar
}