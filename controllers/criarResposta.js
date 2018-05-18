module.exports.criarResposta = function (app, req, res) {
		
		var ObjectId = require('mongodb').ObjectId;	

		var topico = req.body;
		var id = req.query.id;

		var data = new Date();
		var dia = data.getDate();
		var mes = data.getMonth() + 1;
		switch(mes) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			mes = '0' + mes;
			break;
		}
		var ano = data.getFullYear();
		var hora = data.getHours();
		var minutos = data.getMinutes();
		var data_completa = dia + '/' + mes + '/' + ano + ' - ' + hora + "h" + minutos;
	
		topico.dataResposta = data_completa;
		topico.topico_id = new ObjectId(id);
		topico.resposta_id = new ObjectId();

		var connection = app.config.dbConnection;

		var TopicosDAO = new app.models.TopicosDAO(connection);

		TopicosDAO.criarResposta(topico);

		res.redirect("/");

}