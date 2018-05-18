module.exports = function(app) {

	app.post('/criarid', function (req, res) {
		app.controllers.criarId.criarId(app, req, res);
	});

}