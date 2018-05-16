module.exports.novaResposta = function (app, req, res) {
	
	var id = req.query.id;
	var reply = req.query.reply;

	res.render('novaResposta', { doc: id, reply: reply });
}