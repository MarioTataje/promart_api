const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('promart', 'root', 'pacheco98', {
    host: '127.0.0.1',
    dialect: 'mysql',
    // avoid created_at and updated_at
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

    //operatorsAliases: false
});

module.exports = sequelize
