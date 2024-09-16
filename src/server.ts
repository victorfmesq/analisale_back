import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// Definir a rota principal
app.get('/', (req: Request, res: Response) => {
  res.send('Sistema de Controle de Estoque');
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
