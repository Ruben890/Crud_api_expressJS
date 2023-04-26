const app = require('./app.js');
const sequelize = require('./database/database.js');


const main = async () => {

    try {
        await sequelize.authenticate();
        app.listen(app.get('port'), () => {
           
        })

    } catch (error) {
        console.error('error:', error);
    }


}
main();