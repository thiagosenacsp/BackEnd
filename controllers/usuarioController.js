const Usuario = require("../models/usuario");

module.exports = {
  register(req, res) {
    const usuario = req.body;
    Usuario.create(usuario, ({ err, data }) => {
      if (err) {
        return res.usuario(501).json({
          success: false,
          message: "Erro ao criar o usuário",
        });
      }
      return res.usuario(201).json({
        success: true,
        message: "Usuário cadastrado com sucesso no banco",
        data: data,
      });
    });
  },
};
