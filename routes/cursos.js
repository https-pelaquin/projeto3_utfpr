var express = require('express');
var path = require('path');
var router = express.Router();
var modelCurso = require('../model/Curso');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, "public/images/uploads/");
    },
    filename: function(req, file, callback) {
        callback(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

router.get('/', async(req, res) => {
    res.render('cursos');
});

router.get('/criarcurso', async(req, res) => {
    res.render('criarcurso');

});

router.post('/savecurso', upload.single("imagem"), async(req, res) => {
    req.body.imagem = "/images/uploads/" + res.req.file.filename;
    modelCurso.insertCurso(req);
    res.redirect('/cursos');
});

router.post('/getCursos', function(req, res, next) {
    modelCurso.getCursos().then((result) => {
        res.json(result);
    });
});


module.exports = router;