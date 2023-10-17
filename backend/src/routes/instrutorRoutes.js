const express = require('express');
const router = express.Router();

// Rota para listar todos os instrutores
router.get('/', (req, res) => {
    res.json({ message: 'Listagem de todos os instrutores' });
});

// Rota para criar um novo instrutor
router.post('/', (req, res) => {
    const newInstrutor = req.body;
    res.json({ message: 'Novo instrutor criado', instrutor: newInstrutor });
});

// Rota para visualizar informações de um instrutor pelo ID
router.get('/:id', (req, res) => {
    const instrutorId = req.params.id;
    res.json({ message: 'Informações do instrutor com ID ' + instrutorId });
});

// Rota para atualizar informações de um instrutor pelo ID
router.put('/:id', (req, res) => {
    const instrutorId = req.params.id;
    // Lógica para atualizar o instrutor
    res.json({ message: 'Informações do instrutor com ID ' + instrutorId + ' atualizadas', instrutor: updatedInstrutor });
});

// Rota para excluir um instrutor pelo ID
router.delete('/:id', (req, res) => {
    const instrutorId = req.params.id;
    // Lógica para excluir o instrutor
    res.json({ message: 'Instrutor com ID ' + instrutorId + ' excluído' });
});

module.exports = router;
