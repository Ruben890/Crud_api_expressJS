const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const swaggerUI = require('swagger-ui-express');
const V1Router = require('./v1/routes/users.routes.js');

//**Setting */
app.set('port', process.env.PORT || 4000);

//**middleware */
app.use(express.json())
app.use(cors());

//** Routes */
app.use('/api/v1/', V1Router)

//* Swagger Documentation
const swaggerDocument = require('./v1/swagger.json');
app.use('/api-v1-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

module.exports = app;

