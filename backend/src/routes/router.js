const express = require('express');

const router = express.Router();

router.get('/exemplo', (req, res, next) => {
    try {
        res.json({ message: 'Rota de exemplo executada com sucesso!' });
    } catch (error) {
        next(error); 
    }
});

module.exports = router;
