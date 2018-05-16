module.exports = function(app) {

	app.get('/topico', function (req, res) {
		app.controllers.topico.topico(app, req, res);
	});
	
};