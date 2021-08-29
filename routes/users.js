var express = require('express');
var router = express.Router();
var model = require('../model/User');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/login', async(req, res) => {
    res.render('login');
});

router.get('/cadastro', async(req, res) => {
    res.render('cadastrar');
});

router.post('/savecadastro', async(req, res) => {
    model.insert(req);
    res.redirect('/');
});
module.exports = router;