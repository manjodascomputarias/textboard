module.exports.criarId = function (app, req, res) {
	
		var id = req.body;
		var connection = app.config.dbConnection;

		var TopicosDAO = new app.models.TopicosDAO(connection);

		//TopicosDAO.criarId(id);

		res.redirect('admin');

}