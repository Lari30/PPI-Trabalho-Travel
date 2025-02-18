const express = require('express');
const session = require('express-session');
const path = require('path');
const routes = require('./routes');

const app = express();
const PORT = 5500;

// Configuração da sessão
app.use(session({
    secret: 'segredo_seguro',
    resave: false,
    saveUninitialized: true
}));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../front')));
app.use(routes);

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});