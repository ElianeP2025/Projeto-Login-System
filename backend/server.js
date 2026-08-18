const express = require("express");
const cors = require("cors");
const path = require("path");

// Importando as rotas criadas
const authRoutes = require("./routes/auth");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Servindo arquivos estáticos do frontend
app.use(express.static(path.join(__dirname, "../frontend")));

// Rota principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// Rotas da API
app.use("/api", authRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});