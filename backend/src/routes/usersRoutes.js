const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
    res.json({ message: 'Listagem de todos os usuários' });
});

router.post('/users', (req, res) => {
    const newUser = req.body; 
    res.json({ message: 'Novo usuário criado', user: newUser });
});

router.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.json({ message: 'Informações do usuário com ID ' + userId });
});

router.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.json({ message: 'Informações do usuário com ID ' + userId + ' atualizadas', user: updatedUser });
});

router.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.json({ message: 'Usuário com ID ' + userId + ' excluído' });
});

module.exports = router;
