const db = require("../config/config");

const Status = {};

Status.create = (status, result) => {
  const sql = `INSERT INTO status(tipo, descricao) VALUES (?, ?)`;
  db.query(sql, [status.tipo, status.descricao], (err, res) => {
    if (err) {
      console.log("Erro no banco de dados", err);
      result(err, null);
    } else {
      result("Novo idStatus: ", res.insertId);
      result(null, res.insertId);
    }
  });
};

module.exports = Status;
