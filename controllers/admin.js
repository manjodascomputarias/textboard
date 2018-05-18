module.exports.admin = function (app, req, res) {
	var connection = app.config.dbConnection;

	var TopicosDAO = new app.models.TopicosDAO(connection);

	TopicosDAO.carregarId(function(err, result){
		//res.send(result);
		res.render('admin', {doc: result});
	});
}