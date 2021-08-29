const MongoClient = require('mongodb').MongoClient;

module.exports = class Curso {
    static async insertCurso(req) {
        const conn = await MongoClient.connect('mongodb+srv://bruno:BrunoHPgg27@cluster0.qrqsu.mongodb.net/projeto_utfpr?retryWrites=true&w=majority'),
            db = conn.db();
        let cursoData = {
            "nome": req.body.nome,
            "descrição": req.body.descrição,
            "imagem": req.body.imagem
        };
        return db.collection('cursos').insertOne(cursoData);
        conn.close();
    }

    static async getCursos() {
        const conn = await MongoClient.connect('mongodb+srv://bruno:BrunoHPgg27@cluster0.qrqsu.mongodb.net/projeto_utfpr?retryWrites=true&w=majority'),
            db = conn.db();
        return db.collection('cursos').find().toArray();
    }
}