const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const moment = require('moment');

const Client = sequelize.define('clients', {
    nombre: {
        type: DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    },
    edad: {
        type: DataTypes.INTEGER
    },
    fecha_nacimiento: {
        type: DataTypes.DATE,
        get: function() {
            return moment.utc(this.getDataValue('fecha_nacimiento')).format('YYYY-MM-DD');
        }
    }
});

module.exports = {
    Client
}