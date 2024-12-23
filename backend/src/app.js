import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './docs/index.js';

import userRoutes from './routes/userRoutes.js';
const app = express();
const PORT = 3000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/api', userRoutes);

// Rota principal
app.get('/', (req, res) => {
    res.send('Olá mundo!');
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/`);
});