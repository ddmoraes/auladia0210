const Sequelize = require("sequelize");

const connection = new Sequelize('projetosegunda',
'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;