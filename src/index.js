const app = require('./app.js');
const sequelize = require('./database/database.js');

const main = async () => {

    try {
        await sequelize.sync({ force: false });
        app.listen(app.get('port'), () => {
            console.log(`http://localhost:${app.get("port")}/api-v1-docs/#/Users/get_users`)
        })

    } catch (error) {
        console.error('error:', error);
    }


}
main();