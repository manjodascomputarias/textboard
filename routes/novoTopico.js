module.exports = function (app) {

	app.get('/novotopico', function (req, res) {
		app.controllers.novoTopico.novoTopico(app, req, res);
	});
	
}