const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const logger = require("morgan");
const cors = require("cors");

const statusRoutes = require("./routes/statusRoutes");
const tipoRoutes = require("./routes/tipoRoutes");
const usuarioRoutes = require("./routes/usuarioRoutes");

const port = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.disable("x-powered.by");

app.set("port", port);

statusRoutes(app);
tipoRoutes(app);
usuarioRoutes(app);

// IP Local: 10.24.96.26

server.listen(3000, "10.24.96.26" || "localhost", function () {
  console.log(
    "Teste de servidor " + process.pid + " porta " + port + " iniciada..."
  );
});

app.get("/", (req, res) => {
  res.send("Rota raiz do servidor backend");
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).send(err.stack);
});
