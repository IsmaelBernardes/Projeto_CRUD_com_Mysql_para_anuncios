const chamadaBancDad = require("../../bancoDeDados/chamadaBancDad");
const anuncios = require('../../tratarDados/anuncios');

module.exports = (router) => {
    
    const nameTab = 'anuncios';

    router.get('/anuncios', (req, res) => {

        chamadaBancDad.lista(nameTab)
            .then(([rows]) => {
                
                res.send(JSON.stringify(rows));
            }).catch(console.log);
    });

    router.post('/anuncios', (req, res) => {

        const anuncio = anuncios.criar(req.body);
        chamadaBancDad.adiciona(anuncio, nameTab)
            .then(([rows]) => {
            
                res.send(JSON.stringify(rows));
            }).catch(console.log);
    });
    
    router.get('/anuncios/:id', (req, res) => {

        chamadaBancDad.buscaId(req.params.id, nameTab)
            .then(([rows]) => {
                
                res.send(JSON.stringify(rows));
            }).catch(console.log);
    });
    
    router.delete('/anuncios/:id', (req, res) => {

        chamadaBancDad.deleta(req.params.id, nameTab)
            .then(([rows]) => {
                
                res.send(JSON.stringify(rows));
            }).catch(console.log);
    });

    router.put('/anuncios/:id', (req, res) => {
        
        chamadaBancDad.atualiza(req.body, req.params.id, nameTab)
            .then(([rows]) => {
                
                res.send(JSON.stringify(rows));
            }).catch(console.log);
    });
}