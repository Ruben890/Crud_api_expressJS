const app = require('./app.js');
const sequelize = require('./database/database.js');
const { swaggerDocs: v1swaggerDocs } = require('./v1/swagger.js')
const main = async () => {

    try {
        await sequelize.authenticate();
        app.listen(app.get('port'), () => {
            v1swaggerDocs(app, app.get('port'))
        })

    } catch (error) {
        console.error('error:', error);
    }


}
main();