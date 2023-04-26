const { DataTypes } = require('sequelize')
const sequelize = require('../../database.js')

const Users = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    dni: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            async isUnique(value, next) {
                const users = await Users.findOne({ where: { dni: value } });
                if (users) return next("DNI is not unique")
                next()
            }
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
            async isUnique(value, next) {
                const users = await Users.findOne({ where: { email: value } });
                if (users) return next('Email is already in use');
                next();
            }
        }


    }

});

module.exports = Users