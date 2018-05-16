var mongo = require("mongodb").MongoClient;
var assert = require("assert");

const url = "mongodb://localhost:27017";
const dbName = "lan2";

var connMongoDB = function(dados, callback) {
	mongo.connect(url, function(err, client) {
		assert.equal(null, err);
		console.log("Connected successfully to server");
		const db = client.db(dbName);
		query(db, dados, callback);
		client.close();
	});
};

function query(db, dados, callback) {
	var collection = db.collection(dados.collection);
	switch (dados.operacao) {
		case "inserir":
		collection.insertOne(dados.topico);
		break;
		case "carregar":
		collection.find({}).sort({posted: -1}).toArray(callback);
		break;
		case "carregarTopico":
		collection.find({_id: dados.topico}).toArray(callback);
		break;
		case "push":
		collection.update({_id : dados.respostas.topico_id}, { $set: { "posted" : Date.now() }, $push: { "respostas" : dados.respostas } })
		break;
		default:
		break;
	}
}

module.exports = function() {
	return connMongoDB;
};
