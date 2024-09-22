const EventoDAO = require("../DAO/eventoDAO");
const eventoDAO = new EventoDAO();

class EventoModel {
  constructor(nome, detalhes, data, local, numIngressos, valorIngresso) {
    this.nome = nome;
    this.detalhes = detalhes;
    this.data = data;
    this.local = local;
    this.numIngressos = numIngressos;
    this.valorIngresso = valorIngresso;
  }

  async adicionar(dados) {
    return await eventoDAO.adicionar(dados);
  }

  async obterTodos() {
    return await eventoDAO.obterTodos();
  }

  async obterPorId(id) {
    return await eventoDAO.obterPorId(id);
  }

  async atualizar(id, dados) {
    return await eventoDAO.atualizar(id, dados);
  }

  async deletar(id) {
    return await eventoDAO.deletar(id);
  }
}

module.exports = EventoModel;
