const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const express = require('express');
const app = express();
const port = 3000;

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '1.0.0',
            description: 'Descrição da API usando Swagger',
        },
        servers: [
            {
                url: 'http://localhost:3000' // URL base da API
            },
        ],
    },
    apis: ['./routes/*.js'] // Caminho para os arquivos onde defino minhas rotas
}

const swaggerDocs = swaggerJsdoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Rota principal
app.get('/', (req, res) => {
    res.send('Olá mundo!');
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`);
});