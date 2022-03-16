const { Sequelize } = require('sequelize')

module.exports = new Sequelize('codegig', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
})