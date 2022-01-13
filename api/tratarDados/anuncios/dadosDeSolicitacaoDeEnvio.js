

module.exports = {
    
    async enviar(dados){

    const {titulo, descricao, secaoSelecionada} = await dados;
    
    const dadosFormatados = {
        titulo: titulo, 
        descricao: descricao, 
        secaoSelecionada: secaoSelecionada
    };

    return dadosFormatados;
}
}