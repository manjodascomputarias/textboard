module.exports.criarResposta = function (app, req, res) {
		
		var ObjectId = require('mongodb').ObjectId;	

		var topico = req.body;

		var id = req.query.id;

		topico.topico_id = new ObjectId(id);
		topico.resposta_id = new ObjectId();

		var connection = app.config.dbConnection;

		var TopicosDAO = new app.models.TopicosDAO(connection);

		TopicosDAO.criarResposta(topico);

		res.redirect("/");

}