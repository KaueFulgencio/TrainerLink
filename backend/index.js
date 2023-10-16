const { Pool } = require('pg');
const express = require('express');
const app = express();
const cors = require('cors');
const router = express.Router();

const conexao_banco = new Pool({
    user: 'postgres',
    password: 'root',
    host: 'localhost',
    database: 'gymlink',
    port: 5432,
});

app.use(express.json());
app.use(cors());
app.use(router);

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

const now = new Date();

app.listen(3333, () => {
    const now = new Date().toLocaleString();
    console.log(`Servidor Funcionando! ${now}`);
});
