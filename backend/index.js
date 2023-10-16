const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 3333;

const userRoutes = require('./src/routes/users'); 

app.use(express.json());
app.use(cors());

app.use('/api', userRoutes); 

app.use((err, req, res, next) => {
    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message
        });
    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal Server Error.'
    });
});
app.listen(port, () => {
    console.log(`Servidor Funcionando`);
});
