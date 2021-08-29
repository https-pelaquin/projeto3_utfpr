const MongoClient = require('mongodb').MongoClient;

module.exports = class User {
    static async insert(req) {
        const conn = await MongoClient.connect('mongodb+srv://bruno:BrunoHPgg27@cluster0.qrqsu.mongodb.net/projeto_utfpr?retryWrites=true&w=majority'),
            db = conn.db();
        let userData = {
            "nome": req.body.nome,
            "email": req.body.email,
            "senha": req.body.senha
        };
        return db.collection('users').insertOne(userData);
        conn.close();
    }
}