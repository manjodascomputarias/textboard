module.exports.criarNovo = function (app, req, res) {
	
	var topico = req.body;

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
	var agora = data.getTime();
	var data_completa = dia + '/' + mes + '/' + ano + ' - ' + hora + "h" + minutos;

	topico.data = data_completa;
	topico.posted = agora;
	topico.respostas = [];

	var connection = app.config.dbConnection;

	var TopicosDAO = new app.models.TopicosDAO(connection);
	
	TopicosDAO.criarNovo(topico);
	res.redirect('/');


}