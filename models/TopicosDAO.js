function TopicosDAO(connection) {
	this._connection = connection;
}

TopicosDAO.prototype.criarNovo = function(topico) {
	var dados = {
		operacao: "inserir",
		topico: topico,
		collection: "topicos"
	};
	this._connection(dados);
};

TopicosDAO.prototype.criarResposta = function(topico) {
	var dados = {
		operacao: "push",
		respostas: topico,
		collection: "topicos"
	};
	this._connection(dados);
};

TopicosDAO.prototype.carregarTopicos = function(callback) {
	var dados = {
		operacao: "carregar",
		collection: "topicos"
	};
	this._connection(dados, callback);
};

TopicosDAO.prototype.carregarTopico = function(topico, callback) {
	var dados = {
		operacao: "carregarTopico",
		topico: topico,
		collection: "topicos"
	};
	this._connection(dados, callback);
};

module.exports = function() {
	return TopicosDAO;
};