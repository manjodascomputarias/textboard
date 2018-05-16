module.exports = function(app) {

	app.post('/criarresposta', function (req, res) {
		app.controllers.criarResposta.criarResposta(app, req, res);
	});

}