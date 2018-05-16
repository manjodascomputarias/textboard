module.exports.topico = function(app, req, res) {
	var ObjectId = require('mongodb').ObjectId;	

	var id = new ObjectId(req.query.id);

	var connection = app.config.dbConnection;

	var TopicosDAO = new app.models.TopicosDAO(connection);

	TopicosDAO.carregarTopico(id, function(err, result){
		res.render('topico', {doc: result});
	});

}