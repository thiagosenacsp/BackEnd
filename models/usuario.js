const db = require("../config/config");

const Usuario = {};

Usuario.create = (usuario, result) => {
  const sql = `INSERT INTO usuario(email, senha) VALUES (?, ?)`;
  db.query(sql, [usuario.email, usuario.senha], (err, res) => {
    if (err) {
      console.log("Erro no banco de dados", err);
      result(err, null);
    } else {
      result("Novo idUsuario: ", res.insertId);
      result(null, res.insertId);
    }
  });
};

module.exports = Usuario;