

module.exports = (router) => {

    router.get('/pesquisas', (req, res) => {

        res.send('Você esta na rota de pesquisas');
    });
}