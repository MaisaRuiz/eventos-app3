const mysql = require("mysql2/promise");

class Conexao {
  constructor() {
    this.pool = mysql.createPool({
      host: "localhost",
      user: "root",
      database: "eventos",
      password: "",
    });
  }

  async ExecutaComando(sql, params = []) {
    const connection = await this.pool.getConnection();
    try {
      const [rows] = await connection.query(sql, params);
      return rows;
    } finally {
      connection.release();
    }
  }

  async ExecutaComandoNonQuery(sql, params = []) {
    const connection = await this.pool.getConnection();
    try {
      const [results] = await connection.query(sql, params);
      return results.affectedRows;
    } finally {
      connection.release();
    }
  }
}

module.exports = Conexao;
