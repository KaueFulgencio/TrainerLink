const { Conexao_Banco } = require('pg');

const conexao_banco = new Conexao_Banco({
    user: 'postgres',
    password: 'root',
    host: 'localhost',
    database: 'gymlink',
    port: '5432',
})

(async () => {
    try {
        const client = await conexao_banco.connect();
        console.log('Conectado ao PostgresSQL')
        client.release();
    }
    catch (err) {
        console.error('Erro ao conectar ao PostgresSQL')
    }
})();

const result = await conexao_banco.query('SELECT * FROM tabela');
console.log(result.rows);