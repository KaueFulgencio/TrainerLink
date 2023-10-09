const { Pool } = require('pg');

const conexao_banco = new Pool({
    user: 'postgres',
    password: 'root',
    host: 'localhost',
    database: 'gymlink',
    port: 5432,
});

(async () => {
    try {
        const client = await conexao_banco.connect();
        console.log('Conectado ao PostgreSQL');

        const result = await client.query('SELECT * FROM tabela');
        console.log(result.rows);

        client.release();
    } catch (err) {
        console.error('Erro ao conectar ou consultar o PostgreSQL', err);
    } finally {
        await conexao_banco.end();
    }
})();
