const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

//metadata info about aut API

const options = {
    definition: {
        swagger: '2.0',
        info: {
            title: 'Crud_api',
            version: '1.0.0',
        },
    },
    apis: ['./routes/users.routes.js'],
}

//Docs en JSON format
const swaggerSpec = swaggerJsDoc(options)

//function to setup our docs
const swaggerDocs = (app, port) => {
    app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log(`Version 1 docs are available at:\n http://localhost:${port}/v1/docs`)
}

module.exports = { swaggerDocs }