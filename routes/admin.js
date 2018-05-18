module.exports = function (app) {

	app.get('/admin', function (req, res) {
		app.controllers.admin.admin(app, req, res);
	});
	
}