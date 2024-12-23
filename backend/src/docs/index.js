import swaggerJsdoc from 'swagger-jsdoc';
import userDoc from './userDoc.js'

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
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

swaggerDocs.paths = {
    ...swaggerDocs.paths,
    ...userDoc.paths
}

export default swaggerDocs;