module.exports.criarNovo = function (app, req, res) {
	
		var topico = req.body;
		var data = Date.now();
		topico.posted = data;
		topico.respostas = [];
		var connection = app.config.dbConnection;

		var TopicosDAO = new app.models.TopicosDAO(connection);

		TopicosDAO.criarNovo(topico);

		res.redirect('/');

}