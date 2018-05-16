module.exports = function(app) {

	app.post('/criarnovo', function (req, res) {
		app.controllers.criarNovo.criarNovo(app, req, res);
	});

}