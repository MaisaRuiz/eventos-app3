const Conexao = require("./conexao");
const conexao = new Conexao();

class EventoDAO {
  async adicionar(dados) {
    const sql = 'INSERT INTO eventos SET ?';
    try {
      const result = await conexao.ExecutaComandoNonQuery(sql, dados);
      return result.insertId;
    } catch (error) {
      throw new Error(`Erro ao adicionar evento: ${error.message}`);
    }
  }

  async obterTodos() {
    const sql = "SELECT * FROM eventos";
    return await conexao.ExecutaComando(sql);
  }

  async obterPorId(id) {
    const sql = "SELECT * FROM eventos WHERE id = ?";
    const result = await conexao.ExecutaComando(sql, [id]);
    return result[0];
  }

  async atualizar(id, dados) {
    const sql = "UPDATE eventos SET ? WHERE id = ?";
    await conexao.ExecutaComandoNonQuery(sql, [dados, id]);
  }

  async deletar(id) {
    const sql = "DELETE FROM eventos WHERE id = ?";
    await conexao.ExecutaComandoNonQuery(sql, [id]);
  }
}

module.exports = EventoDAO;
