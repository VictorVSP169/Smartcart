const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve arquivos estáticos da pasta 'SMARTCART'
app.use(express.static(path.join(__dirname)));

// Rota para a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota para a página de pagamento
app.get('/telapagamento.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'telapagamento.html'));
});

// Rota para a página de finalização
app.get('/telafinal.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'telafinal.html'));
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});