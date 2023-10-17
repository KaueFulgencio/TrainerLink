const express = require('express');
const cors = require('cors');

const app = express();
const port = 3333;

app.use(express.json());
app.use(cors());

const userRoutes = require('./src/routes/usersRoutes');
const instrutorRoutes = require('./src/routes/instrutorRoutes');

app.use('/api/users', userRoutes);
app.use('/api/instrutores', instrutorRoutes);

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
  console.log(`Servidor Funcionando na porta ${port}`);
});
