const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Client = sequelize.define('clients', {
    nombre: {
        type: DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    },
    edad: {
        type: DataTypes.NUMBER
    },
    fecha_nacimiento: {
        type: DataTypes.DATE
    }
});

module.exports = {
    Client
}