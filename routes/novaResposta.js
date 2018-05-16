module.exports = function (app) {

	app.get('/novaresposta', function (req, res) {
		app.controllers.novaResposta.novaResposta(app, req, res);
	});
	
}