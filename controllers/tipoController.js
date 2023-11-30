const Tipo = require("../models/tipo");

module.exports = {
  register(req, res) {
    const tipo = req.body;
    Tipo.create(tipo, ({ err, data }) => {
      if (err) {
        return res.tipo(501).json({
          success: false,
          message: "Erro ao criar o tipo",
        });
      }
      return res.tipo(201).json({
        success: true,
        message: "Tipo cadastrado com sucesso no banco",
        data: data,
      });
    });
  },
};
