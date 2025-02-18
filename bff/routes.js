const express = require('express');
const path = require('path');
const { users, travelPackages } = require('./data');
const router = express.Router();

router.get('/', (req, res) => {
    if (!req.session.username) {
        return res.redirect('/login');
    }
    res.sendFile(path.join(__dirname, '../front/index.html'));
});

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../front/login.html'));
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        req.session.username = username;
        return res.redirect('/');
    }
    res.send('Usuário ou senha inválidos. <a href="/login">Tente novamente</a>');
});

router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login');
    });
});

router.get('/api/packages', (req, res) => {
    const { destination, date } = req.query;
    let filteredPackages = travelPackages;
    if (destination) {
        filteredPackages = filteredPackages.filter(p => p.destination.toLowerCase().includes(destination.toLowerCase()));
    }
    if (date) {
        filteredPackages = filteredPackages.filter(p => p.date === date);
    }
    res.json(filteredPackages);
});

router.get('/package/:id', (req, res) => {
    res.sendFile(path.join(__dirname, '../front/package.html'));
});

module.exports = router;