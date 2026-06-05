const cors = require('cors');
app.use(cors());
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL);

const Cliente = mongoose.model('Cliente', {
  nome: String,
  telefone: String,
  servico: String,
  status: String,
});

app.get('/', (req,res) => {
  res.send('API MIFRAN ONLINE 🚀');
});

app.post('/clientes', async (req,res) => {
  const cliente = await Cliente.create(req.body);
  res.json(cliente);
});

app.get('/clientes', async (req,res) => {
  const clientes = await Cliente.find();
  res.json(clientes);
});

app.listen(3000, () => console.log('Servidor rodando'));
