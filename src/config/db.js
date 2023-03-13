const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('promart', 'promart', 'Tataje98', {
    host: 'promart.mysql.database.azure.com',
    dialect: 'mysql',
    // avoid created_at and updated_at
    timezone: '+08:00',
    dialectOptions: {
        encrypt: true,
        ssl : {
          rejectUnauthorized: false
        }
    },
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
