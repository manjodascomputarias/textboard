module.exports.index = function(app, req, res) {

	var connection = app.config.dbConnection;

	var TopicosDAO = new app.models.TopicosDAO(connection);

	TopicosDAO.carregarTopicos(function(err, result){
		//res.send(result);
		res.render('index', {doc: result});
	});

}