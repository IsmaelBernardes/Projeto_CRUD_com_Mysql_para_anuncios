const chamadaBancDad = require("../../bancoDeDados/chamadaBancDad");

module.exports = (router) => {
    
    const nameTab = 'anuncios';

    router.get('/anuncios', (req, res) => {

        chamadaBancDad.lista(res, nameTab);
    });

    router.post('/anuncios', (req, res) => {

        chamadaBancDad.adiciona(req.body, res, nameTab);
    });
    
    router.get('/anuncios/:id', (req, res) => {

        chamadaBancDad.buscaId(req.params.id, res, nameTab);
    });
    
    router.delete('/anuncios/:id', (req, res) => {

        chamadaBancDad.deleta(req.params.id, res, nameTab);
    });

    router.put('/anuncios/:id', (req, res) => {
        
        chamadaBancDad.atualiza(req.body, req.params.id, res, nameTab);
    });
}