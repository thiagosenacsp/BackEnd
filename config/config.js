const mysql = require("mysql");

const db = mysql.createConnection({
  host: "177.73.238.249",
  user: "transfer_thiago",
  password: "S3nac@2023",
  database: "transfer_thiago",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Banco de dados conectado");
});

module.exports = db;
